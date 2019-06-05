<template>
  <Card dis-hover :bordered="false" title="活动实时交易情况">
    <IEcharts :option="option" resizable style="height: 500px;"></IEcharts>
  </Card>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full'

IEcharts.registerMap('china', require('echarts/map/json/china.json'))

export default {
  components: { IEcharts },

  data() {
    return {
      option: {
        series: [{
          type: 'map',
          map: 'china',
          itemStyle: {
            areaColor: '#f5f5f5',
            borderColor: '#aaa'
          },
          emphasis: {
            itemStyle: {
              areaColor: '#56A7FF'
            }
          }
        }]
      }
    }
  }
}
</script>
