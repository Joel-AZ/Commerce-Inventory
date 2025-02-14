<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  pageId: 1
})

const authStore = useAuthStore()

onMounted(() => {
  authStore.logout()
})
</script>

<template />
