<template>
  <div>
    <button @click="payWithPaystack" :disabled="!email">Pay Now</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  email: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  reference: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['payment-success', 'payment-closed'])

let PaystackPop

onMounted(() => {
  PaystackPop = window.PaystackPop
})

const payWithPaystack = () => {
  if (PaystackPop) {
    const handler = PaystackPop.setup({
      key: 'pk_test_ab5107407fe1f0ea8a9037fa8e81cda7cdce908c', // Replace with your actual public key
      email: props.email,
      amount: props.amount * 100, // Amount is in USD
      currency: 'USD', // Set currency to USD
      ref: props.reference,
      callback: (response) => {
        emit('payment-success', response)
      },
      onClose: () => {
        emit('payment-closed')
      }
    })
    handler.openIframe()
  } else {
    console.error('PaystackPop not loaded')
  }
}
</script>