<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="blog in blogs" :key="blog.id" class="blog-preview">
        <h2>{{ blog.attributes.Title }}</h2>
        <p v-if="blog.attributes.Content">
          {{ getContentPreview(blog.attributes.Content) }}
        </p>
        <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }" class="read-more">
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../api'

const blogs = ref([])
const loading = ref(true)
const error = ref(null)

const fetchBlogs = async () => {
  try {
    loading.value = true
    const response = await api.get('/blogs')
    blogs.value = response.data.data
  } catch (err) {
    console.error('Error fetching blogs:', err)
    error.value = 'An error occurred while fetching blogs. Please try again later.'
  } finally {
    loading.value = false
  }
}

const getContentPreview = (content) => {
  if (typeof content === 'string') {
    return content.substring(0, 100) + '...'
  } else if (content && content.length > 0) {
    // Assuming the rich text field returns an array of blocks
    return content[0].children
      .map(child => child.text)
      .join(' ')
      .substring(0, 100) + '...'
  }
  return 'No content available'
}

onMounted(() => {
  fetchBlogs()
})
</script>

<style scoped>
.blog-preview {
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.blog-preview h2 {
  margin-bottom: 10px;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>