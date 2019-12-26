<template>
  <Card dis-hover :bordered="false" title="活动情况预测">
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
        xAxis: {
          type: 'category',
          data: [
            '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
            '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
            '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
          ],
          splitNumber: 12,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [{
          type: 'line',
          smooth: true,
          data: [
            100, 200, 240, 300, 450, 500,
            100, 200, 240, 300, 450, 500,
            100, 200, 240, 300, 450, 500,
            100, 200, 240, 300, 450, 500
          ],
          markPoint: {
            symbol: 'none'
          }
        }]
      }
    }
  }
}
</script>
