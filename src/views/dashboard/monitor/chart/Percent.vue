<template>
  <Card dis-hover :bordered="false" title="各品类占比">
    <div style="display: flex; justify-content: space-around;">
      <i-circle
        v-for="item in data"
        :key="item.name"
        :percent="item.percent"
        stroke-linecap="square"
        :stroke-color="item.color">
        <div>
          <p>{{ item.name }}</p>
          <p style="margin-top: 15px; font-size: 20px;">
            {{ item.percent + '%'}}
          </p>
        </div>
      </i-circle>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: '中式快餐', percent: 32, color: '#56A7FF' },
        { name: '西餐', percent: 25, color: '#6CDFD0' },
        { name: '火锅', percent: 43, color: '#4AC46A' }
      ]
    }
  }
}
</script>
