<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="blog">
      <h1>{{ blog.Title }}</h1>
      <img v-if="blog.Caption && blog.Caption.url" 
          :src="getImageUrl(blog.Caption.url)" 
          alt="Blog Caption" 
          class="blog-image" /> 
      <div v-if="!blog.Is_Paid || isPaid">
        <div v-html="parseContent(blog.Content)"></div>
      </div>
      <div v-else>
        <p>This is a paid article. Please pay to read the full content.</p>
        <paystack-button
          :email="userEmail"
          :amount="5"
          :reference="generateReference()"
          @payment-success="handlePaymentSuccess"
          @payment-closed="handlePaymentClosed"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api'
import PaystackButton from './PaystackButton.vue'

const route = useRoute()
const blog = ref(null)
const isPaid = ref(false)
const userEmail = ref('user@example.com') // In a real app, this would come from user authentication
const loading = ref(true)
const error = ref(null)

const fetchBlog = async () => {
  try {
    loading.value = true
    const response = await api.get(`/blogs/${route.params.id}?populate=*`)
    blog.value = response.data.data
  } catch (err) {
    console.error('Error fetching blog:', err)
    error.value = 'An error occurred while fetching the blog. Please try again later.'
  } finally {
    loading.value = false
  }
}

const generateReference = () => {
  return `BLOG_${route.params.id}_${Date.now()}`
}

const handlePaymentSuccess = async (response) => {
  console.log('Payment successful:', response)
  isPaid.value = true
  // Here you would typically update the backend to record the payment
  try {
    await api.post('/payments', {
      blogId: blog.value.documentId, // Use documentId for the blog
      paymentReference: response.reference,
      amount: response.amount,
    })
  } catch (err) {
    console.error('Error recording payment:', err)
  }
}
const parseContent = (content) => {
  if (Array.isArray(content)) {
    return content.map(block => {
      if (block.type === 'paragraph') {
        return `<p>${block.children.map(child => child.text).join('')}</p>`
      }
      // Add more conditions for other block types if needed
      return ''
    }).join('')
  }
  return content
}

const getImageUrl = (imageUrl) => {
  if (imageUrl) {
    return `http://localhost:1337${imageUrl}`
  }
  return ''
}

const handlePaymentClosed = () => {
  console.log('Payment window closed')
}

onMounted(() => {
  fetchBlog()
})
</script>

<style scoped>
.blog-image {
width: 500px;
height: auto;
}
</style>