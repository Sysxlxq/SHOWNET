<template>
  <div id="product-detail-container" class="page-container">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">
        <h1>山东征云新材料</h1>
      </div>
    </header>

    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <router-link to="/products" class="breadcrumb-link">产品中心</router-link> &gt; 
      <span class="breadcrumb-text">{{ currentCategory }}</span> &gt; 
      <span class="breadcrumb-text">{{ productName }}</span>
    </div>

    <!-- 详情页容器 -->
    <div class="detail-container">
      <!-- 产品基本信息区 -->
      <div class="product-basic">
        <!-- 产品基本信息 -->
        <div class="product-info">
          <h1 class="product-title">{{ productName }}</h1>
          <div class="product-code">产品型号: {{ productCode }}</div>

          <!-- 产品特性标签 -->
          <div class="product-specs">
            <span class="spec-tag" v-for="tag in productTags" :key="tag">{{ tag }}</span>
          </div>

          <!-- 产品简介 -->
          <div class="content-section">
            <h2 class="section-title">产品简介</h2>
            <div class="paragraph-box">
              <p>{{ productSummary }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品参数 -->
      <div class="content-section">
        <h2 class="section-title">技术参数</h2>
        <div>
          <table class="parameter-table">
            <thead>
              <tr>
                <th>项目</th>
                <th>质量指标</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in productParameters" :key="key">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 产品特点 -->
      <div class="content-section">
        <h2 class="section-title">产品特点</h2>
        <div class="paragraph-box">
          <p v-for="(feature, index) in productFeatures" :key="index"><strong>{{ feature.title }}</strong>{{ feature.description }}</p>
        </div>
      </div>

      <!-- 使用工艺及注意事项 -->
      <div class="content-section">
        <h2 class="section-title">使用工艺及注意事项</h2>
        <div class="paragraph-box">
          <p v-for="(notice, index) in productNotice" :key="index">{{ notice }}</p>
        </div>
      </div>

      <!-- 包装和储存 -->
      <div class="content-section">
        <h2 class="section-title">包装和储存</h2>
        <div class="paragraph-box">
          <p>{{ productPackaging }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 所有产品数据（前端存储）
const allProducts = ref([
  {
    id: 'ZY-033',
    name: '环保浸胶粘合体系',
    category: '橡胶骨架材料',
    code: 'ZY-033',
    tags: ['食品级安全', '无VOCs', '无异味'],
    summary: '本产品是一种环保型树脂乳液，配合橡胶胶乳使用，可完全替代 RFL（间苯二酚、甲醛、胶乳）浸胶粘合体系。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '24.0±1.0',
      '粘度 CP/25℃': '15.0±5.0',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以胶乳，可完全替代 RFL 胶；' },
      { title: '真环保', description: '—降低了 RFL 体系在加工和使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用甲醛危险化学品，降低了车间防爆等级要求；' },
      { title: '食品级', description: '—可以应用在粮食、食品类产品运输的输送带制品中。' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '1、将纯水加入计量好的ZY-033中，混合均匀；后加入橡胶胶乳等其他配料，混合均匀后即可正常使用。若静止时间超过48小时后，请混合均匀后再使用。',
      '2、建议使用比例：ZY-033（50%），胶乳等（30-35%），纯水（15-20%）。也可根据使用效果，进行适当调整。',
      '3、产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-034',
    name: '高粘合强度浸胶体系',
    category: '橡胶骨架材料',
    code: 'ZY-034',
    tags: ['高粘合强度', '无VOCs', '环保'],
    summary: '本产品是一种环绿色保型树脂乳液，配合橡胶胶乳使用，可完全替代 RFL（间苯二酚、甲醛、胶乳）浸胶粘合体系。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '24.0±1.0',
      '粘度 CP/25℃': '15.0±5.0',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以胶乳，可完全替代 RFL 胶；' },
      { title: '真环保', description: '—降低了 RFL 体系在加工和使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用甲醛危险化学品，降低了车间防爆等级要求；' },
      { title: '食品级', description: '—可以应用在粮食、食品类产品运输的输送带制品中。' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '1、将纯水加入计量好的ZY-034中，混合均匀；后加入橡胶胶乳等其他配料，混合均匀后即可正常使用。若静止时间超过48小时后，请混合均匀后再使用。',
      '2、建议使用比例：ZY-034（50%），胶乳等（30-35%），纯水（15-20%）。也可根据使用效果，进行适当调整。',
      '3、产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-035',
    name: '快速干燥浸胶体系',
    category: '橡胶骨架材料',
    code: 'ZY-035',
    tags: ['干燥速度快', '无VOCs', '环保'],
    summary: '本产品是一种环绿色保型树脂乳液，配合橡胶胶乳使用，可完全替代 RFL（间苯二酚、甲醛、胶乳）浸胶粘合体系。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '24.0±1.0',
      '粘度 CP/25℃': '15.0±5.0',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以胶乳，可完全替代 RFL 胶；' },
      { title: '真环保', description: '—降低了 RFL 体系在加工和使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用甲醛危险化学品，降低了车间防爆等级要求；' },
      { title: '食品级', description: '—可以应用在粮食、食品类产品运输的输送带制品中。' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '1、将纯水加入计量好的ZY-035中，混合均匀；后加入橡胶胶乳等其他配料，混合均匀后即可正常使用。若静止时间超过48小时后，请混合均匀后再使用。',
      '2、建议使用比例：ZY-035（50%），胶乳等（30-35%），纯水（15-20%）。也可根据使用效果，进行适当调整。',
      '3、产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-041',
    name: '高强度滤纸',
    category: '汽车滤纸行业',
    code: 'ZY-041',
    tags: ['高强度', '耐水性好', '无VOCs'],
    summary: '本产品是一种环绿色保型树脂乳液，配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '42.0±1.0',
      '粘度 CP/25℃': '200±50',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以其他材料，完全达到产品所需性能；' },
      { title: '真环保', description: '—降低了 使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用溶剂等危险化学品，降低了车间防爆等级要求；' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-043',
    name: '快速干燥滤纸',
    category: '汽车滤纸行业',
    code: 'ZY-043',
    tags: ['高强度', '干燥快', '无VOCs'],
    summary: '本产品是一种环绿色保型树脂乳液，配合其他水性材料，可用于汽车滤纸领域，替代原有的溶剂体系。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '42.0±1.0',
      '粘度 CP/25℃': '200±50',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以其他材料，完全达到产品所需性能；' },
      { title: '真环保', description: '—降低了 使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用溶剂等危险化学品，降低了车间防爆等级要求；' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-050',
    name: '高强度绝缘材料',
    category: '绝缘复合材料',
    code: 'ZY-050',
    tags: ['高强度', '无收缩', '无VOCs'],
    summary: '本产品是一种环绿色保型树脂乳液，配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '43.0±1.0',
      '粘度 CP/25℃': '200±50',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以其他材料，完全达到产品所需性能；' },
      { title: '真环保', description: '—降低了 使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用溶剂等危险化学品，降低了车间防爆等级要求；' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  },
  {
    id: 'ZY-053',
    name: '环保绝缘材料',
    category: '绝缘复合材料',
    code: 'ZY-053',
    tags: ['高强度', '无收缩', '环保'],
    summary: '本产品是一种环绿色保型树脂乳液，配合其他水性材料，可用于绝缘材料行业，包括玻纤/碳纤维预浸料等各类复合材料。',
    parameters: {
      '外观': '乳白色液体',
      '固含量%': '43.0±1.0',
      '粘度 CP/25℃': '200±50',
      'PH': '9.0±1.0'
    },
    features: [
      { title: '高性能', description: '—配以其他材料，完全达到产品所需性能；' },
      { title: '真环保', description: '—降低了 使用过程中带来的异味及 VOCS 排放；' },
      { title: '很安全', description: '—不使用溶剂等危险化学品，降低了车间防爆等级要求；' },
      { title: '', description: '下游产品的质量更稳定，质保时间更优越。' }
    ],
    notice: [
      '产品长时间存储会出现少量沉淀，请混合均匀后再使用。请使用纯水清洗包装桶，清洗水可作为稀释水使用。'
    ],
    packaging: '50kg，180kg，850kg/桶，根据客户要求包装。10-35℃存储，6个月。'
  }
])

// 根据路由参数获取产品详情
const currentProduct = ref(null)
const productName = ref('')
const currentCategory = ref('')
const productCode = ref('')
const productTags = ref([])
const productSummary = ref('')
const productParameters = ref({})
const productFeatures = ref([])
const productNotice = ref([])
const productPackaging = ref('')

onMounted(() => {
  const productId = route.params.id
  currentProduct.value = allProducts.value.find(product => product.id === productId)
  
  if (currentProduct.value) {
    productName.value = currentProduct.value.name
    currentCategory.value = currentProduct.value.category
    productCode.value = currentProduct.value.code
    productTags.value = currentProduct.value.tags
    productSummary.value = currentProduct.value.summary
    productParameters.value = currentProduct.value.parameters
    productFeatures.value = currentProduct.value.features
    productNotice.value = currentProduct.value.notice
    productPackaging.value = currentProduct.value.packaging
  }
})
</script>

<style scoped>
/* 产品详情页容器样式 */
.page-container #product-detail-container {
  background-color: #f5f7fa;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

/* 基础样式 */
.header {
  background: #0A2463;
  color: white;
  padding: 15px 10%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  margin: 0;
  color: #FF5252;
  font-weight: normal;
}

.breadcrumb {
  padding: 15px 10%;
  background: #f0f4f8;
  font-size: 0.9rem;
}

.breadcrumb-link {
  color: #0A2463;
  text-decoration: none;
}

.breadcrumb-text {
  color: #666;
}

/* 详情页容器 */
.detail-container {
  padding: 20px 10%;
}

/* 产品基本信息区 */
.product-basic {
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 1.8rem;
  color: #FF5252;
  margin: 0 0 10px;
  font-weight: normal;
  background-color: rgba(10, 36, 99, 0.1);
  padding: 10px 15px;
  border-radius: 5px;
}

.product-code {
  color: #0A2463;
  font-size: 1.1rem;
  margin-bottom: 20px;
  background-color: rgba(10, 36, 99, 0.1);
  padding: 8px 15px;
  border-radius: 5px;
  display: inline-block;
}

.product-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.spec-tag {
  background: #e0e0e0;
  color: #333;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* 内容区域 */
.content-section {
  background: white;
  border-radius: 5px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #0A2463;
}

.section-title {
  font-size: 1.3rem;
  color: #0A2463;
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  font-weight: normal;
  background-color: rgba(10, 36, 99, 0.1);
  padding: 10px 15px;
  border-radius: 5px;
}

/* 段落样式 */
.paragraph-box {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
}

/* 技术参数表格 */
.parameter-table {
  width: 100%;
  border-collapse: collapse;
}

.parameter-table th,
.parameter-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.parameter-table th {
  background-color: #f0f4f8;
  width: 30%;
}

.parameter-table tr:last-child td {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .product-basic {
    flex-direction: column;
  }
  .detail-container {
    padding: 15px;
  }
}
</style>