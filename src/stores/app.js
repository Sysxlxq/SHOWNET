import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    cards: useStorage('cards', [
      {
        id: 1,
        title: 'A涂料',
        thumbnail: 'https://via.placeholder.com/300',
        summary: 'A涂料是我们公司自主研发的高性能环保涂料，具有优异的耐候性和耐腐蚀性。',
        content: `
          <h1>A涂料</h1>
          <p>A涂料是我们公司自主研发的高性能环保涂料，具有优异的耐候性和耐腐蚀性。</p>
          <p>产品特点：</p>
          <ul>
            <li>环保无毒，VOC含量低于国家标准</li>
            <li>耐候性强，适应各种复杂气候条件</li>
            <li>耐腐蚀，有效保护基材</li>
            <li>附着力强，不易脱落</li>
            <li>颜色多样，可根据客户需求定制</li>
          </ul>
          
          <h2>技术参数</h2>
          <table>
            <tr>
              <th>参数</th>
              <th>值</th>
            </tr>
            <tr>
              <td>固含量</td>
              <td>≥65%</td>
            </tr>
            <tr>
              <td>干燥时间</td>
              <td>表干：≤2小时，实干：≤24小时</td>
            </tr>
            <tr>
              <td>附着力</td>
              <td>≤1级</td>
            </tr>
            <tr>
              <td>耐冲击性</td>
              <td>≥50kg·cm</td>
            </tr>
            <tr>
              <td>耐盐雾性</td>
              <td>≥500小时，无明显腐蚀</td>
            </tr>
          </table>
          
          <h2>应用领域</h2>
          <p>A涂料广泛应用于建筑外墙、桥梁、钢结构等领域，适用于各种复杂环境。</p>
          <p>已经通过了多项国家和国际标准认证，包括但不限于：</p>
          <ul>
            <li>ISO 9001:2015 质量管理体系认证</li>
            <li>ISO 14001:2015 环境管理体系认证</li>
            <li>ISO 45001:2018 职业健康安全管理体系认证</li>
            <li>GB/T 2918-2020 建筑涂料有害物质限量</li>
          </ul>
          
          <h2>使用方法</h2>
          <p>1. 表面处理：确保基材表面干净、干燥、无油污和灰尘。</p>
          <p>2. 搅拌均匀：使用前充分搅拌涂料，确保混合均匀。</p>
          <p>3. 施工条件：建议在温度5-35℃，湿度≤85%的条件下施工。</p>
          <p>4. 施工方法：可采用刷涂、滚涂或喷涂方式施工。</p>
          <p>5. 涂层厚度：建议每遍涂层厚度控制在20-30μm，根据需要可涂2-3遍。</p>
          <p>6. 重涂间隔：每遍涂膜表干后，间隔2-4小时可进行下一遍涂装。</p>
        `
      },
      {
        id: 2,
        title: 'B材料',
        thumbnail: 'https://via.placeholder.com/300',
        summary: 'B材料是一种高性能复合材料，具有优异的力学性能和耐腐蚀性。',
        content: 'B材料详细介绍...'
      },
      {
        id: 3,
        title: 'C材料',
        thumbnail: 'https://via.placeholder.com/300',
        summary: 'C材料是一种新型环保材料，具有良好的保温隔热性能。',
        content: 'C材料详细介绍...'
      },
      {
        id: 4,
        title: 'D合成',
        thumbnail: 'https://via.placeholder.com/300',
        summary: 'D合成是一种多功能合成材料，适用于多种工业应用。',
        content: 'D合成详细介绍...'
      }
    ]),
    isAdmin: useStorage('isAdmin', false),
    currentPage: 1,
    itemsPerPage: 10
  }),
  actions: {
    toggleAdmin() {
      this.isAdmin = !this.isAdmin
    },
    addCard(card) {
      this.cards.push({ ...card, id: Date.now() })
    },
    updateCard(updatedCard) {
      const index = this.cards.findIndex(c => c.id === updatedCard.id)
      if (index >= 0) this.cards.splice(index, 1, updatedCard)
    }
  },
  getters: {
    paginatedCards: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage
      const end = start + state.itemsPerPage
      return state.cards.slice(start, end)
    }
  }
})