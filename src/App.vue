<template>
  <div class="min-h-screen bg-blue-900">
    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter , useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 添加返回主页按钮
const addBackToHomeButton = () => {
  const backToHomeButton = document.createElement('button')
  backToHomeButton.textContent = '返回主页'
  backToHomeButton.style.position = 'fixed'
  backToHomeButton.style.top = '20px'
  backToHomeButton.style.right = '20px'
  backToHomeButton.style.padding = '10px 20px'
  backToHomeButton.style.background = '#00B4FF'
  backToHomeButton.style.color = 'white'
  backToHomeButton.style.border = 'none'
  backToHomeButton.style.borderRadius = '5px'
  backToHomeButton.style.cursor = 'pointer'

  backToHomeButton.addEventListener('click', () => {
    router.push('/')
  })

  document.body.appendChild(backToHomeButton)
}


onMounted(() => {
  if (route.path !== '/') {
    addBackToHomeButton()
  }
  // 应用启动时的初始化逻辑
  console.log('App is mounted')
})
</script>