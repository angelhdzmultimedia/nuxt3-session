<script setup lang="ts">
const count = ref(0)
async function increase() {
  const data = await $fetch('/api/auth/login', {
    method: 'POST',
  })
  count.value = data
}
</script>

<template>
  <div>
    {{ count }}
    <button @click="increase">+</button>
  </div>
</template>
