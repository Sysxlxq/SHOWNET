<template>
  <div id="product-center-container">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">
        <h1>山东征云新材料</h1>
      </div>
    </header>

    <!-- 产品分类导航 -->
    <div class="category-tabs">
      <div 
        class="tab" 
        :class="{ active: activeCategory === 'rubber' }"
        @click="switchCategory('rubber')"
      >
        橡胶骨架材料
      </div>
      <div 
        class="tab" 
        :class="{ active: activeCategory === 'filter' }"
        @click="switchCategory('filter')"
      >
        汽车滤纸行业
      </div>
      <div 
        class="tab" 
        :class="{ active: activeCategory === 'composite' }"
        @click="switchCategory('composite')"
      >
        绝缘复合材料
      </div>
    </div>

    <!-- 产品列表容器 -->
    <div class="product-container">
      <!-- 橡胶骨架材料 -->
      <div class="product-section" v-if="activeCategory === 'rubber'">
        <h2 class="section-title">橡胶骨架材料</h2>
        
        <!-- 产品列表 -->
        <div class="product-list">
          <div class="product-card" v-for="product in rubberProducts" :key="product.id">
            <div class="product-info">
              <div class="product-code">{{ product.id }}</div>
              <p class="product-desc">{{ product.desc }}</p>
              <div class="product-specs">
                <span class="spec-tag" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
              </div>
              <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="view-detail">
                查看详情
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 汽车滤纸行业 -->
      <div class="product-section" v-if="activeCategory === 'filter'">
        <h2 class="section-title">汽车滤纸行业</h2>
        
        <!-- 产品列表 -->
        <div class="product-list">
          <div class="product-card" v-for="product in filterProducts" :key="product.id">
            <div class="product-info">
              <div class="product-code">{{ product.id }}</div>
              <p class="product-desc">{{ product.desc }}</p>
              <div class="product-specs">
                <span class="spec-tag" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
              </div>
              <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="view-detail">
                查看详情
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 绝缘复合材料 -->
      <div class="product-section" v-if="activeCategory === 'composite'">
        <h2 class="section-title">绝缘复合材料</h2>
        
        <!-- 产品列表 -->
        <div class="product-list">
          <div class="product-card" v-for="product in compositeProducts" :key="product.id">
            <div class="product-info">
              <div class="product-code">{{ product.id }}</div>
              <p class="product-desc">{{ product.desc }}</p>
              <div class="product-specs">
                <span class="spec-tag" v-for="tag in product.tags" :key="tag">{{ tag }}</span>
              </div>
              <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="view-detail">
                查看详情
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 从会话存储中获取最后访问的分类
const getLastCategory = () => {
  return sessionStorage.getItem('lastCategory') || 'rubber'
}

// 当前活动分类
const activeCategory = ref(getLastCategory())

// 切换分类
const switchCategory = (category) => {
  activeCategory.value = category
  // 将当前分类存储到会话存储中
  sessionStorage.setItem('lastCategory', category)
}

// 示例产品数据
const rubberProducts = ref([
  {
    id: 'ZY-033',
    name: '环保浸胶粘合体系',
    desc: '配合橡胶胶乳使用，可完全替代 RFL（间苯二酚、甲醛、胶乳）浸胶粘合体系，使用过程中无异味及VOCs，安全环保，可用于接触食品级制品中。',
    tags: ['食品级安全', '无VOCs', '无异味'],
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: 'ZY-034',
    name: '高粘合强度浸胶体系',
    desc: '配合橡胶胶乳使用，替代RFL浸胶粘合体系，使用过程中无异味及VOCs，安全环保，粘合强度高。',
    tags: ['高粘合强度', '无VOCs', '环保'],
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: 'ZY-035',
    name: '快速干燥浸胶体系',
    desc: '替代RFL浸胶粘合体系，使用过程中无异味及VOCs，安全环保，干燥速度快。',
    tags: ['干燥速度快', '无VOCs', '环保'],
    image: 'https://via.placeholder.com/600x400'
  }
])

const filterProducts = ref([
  {
    id: 'ZY-041',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。强度高，耐水性好，使用过程中无异味及VOCs，安全环保。',
    tags: ['高强度', '耐水性好', '无VOCs'],
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: 'ZY-043',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。强度高，干燥速度快，使用过程中无异味及VOCs，安全环保。',
    tags: ['高强度', '干燥快', '无VOCs'],
    image: 'https://via.placeholder.com/600x400'
  }
])

const compositeProducts = ref([
  {
    id: 'ZY-050',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。强度高，无VOCs排放，安全环保，固化后，产品无收缩。',
    tags: ['高强度', '无收缩', '无VOCs'],
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: 'ZY-053',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。强度高，无VOCs排放，安全环保，固化后，产品无收缩。',
    tags: ['高强度', '无收缩', '环保'],
    image: 'https://via.placeholder.com/600x400'
  }
])

// 监听路由变化
watch(route, (to, from) => {
  // 如果从详情页返回，则恢复之前的分类
  if (from.name === 'ProductDetail') {
    activeCategory.value = getLastCategory()
  }
})

// 初始化分类状态
onMounted(() => {
  activeCategory.value = getLastCategory()
})
</script>

<style scoped>
/* 产品中心页面容器样式 */
#product-center-container {
  background-color: #f5f7fa; /* 产品中心背景颜色 */
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* 基础样式 */
.header {
  background: linear-gradient(135deg, #0A2463, #003366);
  color: white;
  padding: 15px 10%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.logo h1 {
  margin: 0;
  color: #ff5252;
}

/* 产品分类导航 */
.category-tabs {
  display: flex;
  justify-content: center;
  background: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: 30px;
}
.tab {
  padding: 15px 30px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  font-weight: bold;
  color: #333; /* 设置文字颜色 */
}
.tab.active {
  border-bottom-color: #ff5252;
  color: #ff5252;
}
.tab:hover {
  background: rgba(0, 180, 255, 0.1);
}

/* 产品列表容器 */
.product-container {
  padding: 40px 10%;
}
.section-title {
  font-size: 1.8rem;
  color: #0A2463;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.section-title:after {
  content: "";
  flex: 1;
  height: 1px;
  background: #ddd;
  margin-left: 20px;
}

/* 产品列表样式 */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}
.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 90, 180, 0.15);
}
.product-image {
  height: 200px;
  background: #eee;
  background-size: cover;
  background-position: center;
}
.product-info {
  padding: 20px;
}
.product-name {
  font-size: 1.2rem;
  color: #0A2463;
  margin: 0 0 10px;
}
.product-code {
  color: #ff5252;
  font-weight: bold;
  margin-bottom: 5px;
}
.product-desc {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 15px;
}
.product-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}
.spec-tag {
  background: #e0e0e0;
  color: black;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}
.view-detail {
  display: inline-block;
  padding: 8px 20px;
  background: #0A2463;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 0.9rem;
  transition: background 0.3s;
}
.view-detail:hover {
  background: #00B4FF;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr;
  }
  .tab {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
}
</style>