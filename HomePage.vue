<template>
  <div id="home-container">
    <!-- 动态粒子背景 -->
    <div id="particles-js" class="absolute inset-0"></div>
    
    <!-- 顶部企业标识 -->
    <header class="header">
      <div class="logo">
        <h1>山东征云新材料</h1>
        <p>以创新材料科技驱动产业升级 · 打造可持续发展的绿色未来</p>
      </div>
      <nav class="nav">
        <a href="/products" class="product-center-link">产品中心</a>
        <a href="#contact" class="contact-link">联系方式</a>
        <a href="#contact" class="contact-link">诚聘英才</a>
      </nav>
    </header>
    
    <!-- 产品展示区 -->
    <main class="main-content" id="products">
      <div class="factory-showcase">
        <img src="@/assets/examp.jpg" alt="工厂实景图" class="w-full h-full object-cover">
      </div>
      
      <div class="products-container">
        <div class="product-cards" v-if="isShowingFirstPage">
          <div v-for="(product, index) in fourProducts" :key="index" 
               class="product-card" 
               @click="goToProductDetail(product.id)">
            <h3>{{ product.id }}</h3>
            <p class="tag">{{ product.tags.join(', ') }}</p>
            <p>{{ product.desc }}</p>
          </div>
        </div>
        
        <div class="product-cards" v-else>
          <div v-for="(product, index) in threeProducts" :key="index" 
               class="product-card" 
               @click="goToProductDetail(product.id)">
            <h3>{{ product.id }}</h3>
            <p class="tag">{{ product.tags.join(', ') }}</p>
            <p>{{ product.desc }}</p>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 联系方式强化区 -->
    <section id="contact" class="contact-section">
      <h2>立即获取专业材料解决方案</h2>
      <div class="contact-cards">
        <div class="contact-card">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <h3>销售咨询</h3>
          <p>电话: 13370535205</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
              <path d="M22 7.99L16.01 2 8 9.99l-5.99-7.99L0 7.99l8 6 8-6z"></path>
            </svg>
          </div>
          <h3>企业邮箱</h3>
          <p>bellaliu_yingcheng@163.com</p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3>公司地址</h3>
          <p>中国（山东）自由贸易试验区</p>
          <p>济南片区会展西路88号1号楼</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const rubberProducts = [
  {
    id: 'ZY-033',
    name: '环保浸胶粘合体系',
    desc: '配合橡胶胶乳使用，可完全替代 RFL（间苯二酚、甲醛、胶乳）浸胶粘合体系，使用过程中无异味及VOCs，安全环保，可用于接触食品级制品中。',
    tags: ['食品级安全', '无VOCs', '无异味'],
    category: '橡胶制品'
  },
  {
    id: 'ZY-034',
    name: '高粘合强度浸胶体系',
    desc: '配合橡胶胶乳使用，替代RFL浸胶粘合体系，使用过程中无异味及VOCs，安全环保，粘合强度高。',
    tags: ['高粘合强度', '无VOCs', '环保'],
    category: '橡胶制品'
  },
  {
    id: 'ZY-035',
    name: '快速干燥浸胶体系',
    desc: '替代RFL浸胶粘合体系，使用过程中无异味及VOCs，安全环保，干燥速度快。',
    tags: ['干燥速度快', '无VOCs', '环保'],
    category: '橡胶制品'
  }
];

const filterProducts = [
  {
    id: 'ZY-041',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。强度高，耐水性好，使用过程中无异味及VOCs，安全环保。',
    tags: ['高强度', '耐水性好', '无VOCs'],
    category: '过滤产品'
  },
  {
    id: 'ZY-043',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。强度高，干燥速度快，使用过程中无异味及VOCs，安全环保。',
    tags: ['高强度', '干燥快', '无VOCs'],
    category: '过滤产品'
  }
];

const compositeProducts = [
  {
    id: 'ZY-050',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。强度高，无VOCs排放，安全环保，固化后，产品无收缩。',
    tags: ['高强度', '无收缩', '无VOCs'],
    category: '复合材料'
  },
  {
    id: 'ZY-053',
    name: '环保型树脂乳液',
    desc: '配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。强度高，无VOCs排放，安全环保，固化后，产品无收缩。',
    tags: ['高强度', '无收缩', '环保'],
    category: '复合材料'
  }
];

const allProducts = [...rubberProducts, ...filterProducts, ...compositeProducts];

const isShowingFirstPage = ref(true);
const fourProducts = allProducts.slice(0, 4);
const threeProducts = allProducts.slice(4);

const goToProductDetail = (productId) => {
  router.push(`/products/${productId}`);
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = () => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: '#00F7FF' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 4, random: true },
        line_linked: { 
          enable: true, 
          distance: 150, 
          color: '#00F7FF', 
          opacity: 0.4, 
          width: 1 
        },
        move: { 
          enable: true, 
          speed: 3, 
          direction: 'none', 
          random: true, 
          straight: false, 
          out_mode: 'out' 
        }
      },
      interactivity: {
        events: { 
          onhover: { 
            enable: true, 
            mode: 'bubble' 
          } 
        },
        modes: {
          bubble: { 
            distance: 200, 
            size: 6, 
            duration: 2, 
            opacity: 0.8, 
            speed: 3 
          }
        }
      }
    });
  };
  document.head.appendChild(script);

  setInterval(() => {
    isShowingFirstPage.value = !isShowingFirstPage.value;
  }, 5000);
});
</script>

<style scoped>
/* 全局样式 */
body {
  margin: 0;
  font-family: 'Microsoft YaHei', sans-serif;
  background-color: #0A2463;
  color: white;
  overflow-x: hidden;
  line-height: 1.6;
}

/* 动态粒子背景 */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* 主页容器 */
#home-container {
  position: relative;
  z-index: 1;
}

/* 顶部企业标识 */
.header {
  padding: 20px 10%;
  display: flex;
  align-items: center;
  background: #1a237e;
  z-index: 1;
}
.logo {
  flex: 1;
}
.logo h1 {
  font-size: 2.5rem;
  margin: 0;
  color: #ff5252;
}
.logo p {
  margin: 5px 0 0;
  font-size: 1rem;
  color: white;
  max-width: 600px;
}

/* 导航菜单 */
.nav {
  display: flex;
  gap: 30px;
}
.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s;
  z-index: 1;
}
.nav a:hover {
  background: rgba(219, 90, 107, 0.2);
}
.product-center-link {
  color: white !important;
  text-decoration: none !important;
}
.contact-link, .career-link {
  color: white !important;
  text-decoration: none !important;
}

/* 产品展示区 */
.main-content {
  min-height: 70vh;
  padding: 50px 10%;
  display: flex;
  gap: 30px;
  background-color: #0A2463;
}

/* 左侧工厂实景 */
.factory-showcase {
  flex: 1;
  min-height: 200px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s;
  overflow: hidden;
}
.factory-showcase img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.factory-showcase:hover {
  transform: scale(1.02);
}

/* 右侧产品卡片 */
.products-container {
  flex: 1;
  min-width: 300px;
}
.product-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  height: 100%;
}
.product-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 180, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
}
.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 90, 170, 0.4);
  border-color: #00B4FF;
}
.product-card h3 {
  color: #ff5252;
  margin-top: 0;
  font-size: 1.3rem;
}
.product-card p {
  color: white;
  font-size: 0.9rem;
}
.product-card .tag {
  color: #ff5252;
  font-weight: bold;
  margin: 10px 0;
}

/* 联系方式强化区 */
.contact-section {
  padding: 60px 10%;
  background: linear-gradient(135deg, #0A2463, #003366);
  text-align: center;
  border-top: 1px solid rgba(0, 180, 255, 0.3);
}
.contact-section h2 {
  font-size: 2.2rem;
  color: white;
  margin-bottom: 30px;
}
.contact-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}
.contact-card {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #0077FF;
  border-radius: 10px;
  padding: 25px;
  min-width: 250px;
  transition: all 0.3s;
}
.contact-card:hover {
  transform: scale(1.05);
  background: rgba(0, 90, 80, 0.7);
}
.contact-card h3 {
  color: #ff5252;
  margin-top: 0;
}
.contact-card p {
  margin: 10px 0;
  color: black;
}
.contact-icon {
  font-size: 2rem;
  color: #ff5252;
  margin-bottom: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header { flex-direction: column; text-align: center; }
  .nav { margin-top: 20px; flex-wrap: wrap; justify-content: center; }
  .main-content { flex-direction: column; }
  .factory-showcase { min-height: 300px; }
  .product-cards {
    grid-template-columns: 1fr;
  }
  .product-card {
    height: auto;
  }
}
</style>