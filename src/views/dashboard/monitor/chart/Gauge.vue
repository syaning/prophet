<template>
  <Card dis-hover :bordered="false" title="券核销率">
    <IEcharts :option="option" resizable style="height: 200px;"></IEcharts>
  </Card>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full'

export default {
  components: { IEcharts },

  data() {
    return {
      option: {
        series: [{
          type: 'gauge',
          radius: '100%',
          pointer: {
            width: 2
          },
          axisLine: {
            lineStyle: {
              width: 10
            }
          },
          splitLine: {
            length: 10
          },
          axisTick: {
            show: false
          },
          detail: {
            fontSize: 20,
            formatter: '{value}%'
          },
          data: [
            { value: 60, name: '核销率' }
          ]
        }]
      }
    }
  }
}
</script>
