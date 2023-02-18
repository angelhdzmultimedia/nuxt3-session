<script setup lang="ts">
const count = ref(0)
async function increase() {
  const data = await $fetch('/api/count')
  count.value = data
}
</script>

<template>
  <div
    style="
      text-align: center;
      display: grid;
      place-content: center;
      width: 100%;
      height: 100%;
      gap: 6px;
    "
  >
    <span>Count: {{ count }}</span>
    <button class="btn" @click="increase">INCREASE</button>
  </div>
</template>

<style>
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
}

#__nuxt {
  height: 100%;
  width: 100%;
}

* {
  background: #121212;
  color: white;
  font-family: sans-serif;
}

.btn {
  background: #0099ff;
  cursor: pointer;
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
}

.btn:hover {
  background: #0088ee;
}

.btn:active {
  background: #0066cc;
}
</style>
