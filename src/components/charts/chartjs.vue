<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Pie</p>
          <a href="#" slot="extra" @click.prevent="refreshPie">
            <Icon type="ios-loop-strong"></Icon>
            Refresh
          </a>
          <canvas ref="pie"></canvas>
        </Card>
      </Col>

      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Donut</p>
          <canvas ref="donut"></canvas>
        </Card>
      </Col>

      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Polar</p>
          <canvas ref="polar"></canvas>
        </Card>
      </Col>
    </Row>

    <Row :gutter="16">
      <Col :xs="24" :md="12" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Radar</p>
          <canvas ref="radar"></canvas>
        </Card>
      </Col>

      <Col :xs="24" :md="12" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Bar</p>
          <canvas ref="bar"></canvas>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      pie: null
    }
  },

  mounted() {
    this.initPie()
    this.initDonut()
    this.initPolar()
    this.initRadar()
    this.initBar()
  },

  methods: {
    randNums(n) {
      const nums = []
      for (let i = 0; i < n; i++) {
        nums.push(Math.random() * 100 >> 0)
      }
      return nums
    },

    initPie() {
      this.pie = new Chart(this.$refs.pie, {
        type: 'pie',
        data: {
          labels: ['blue', 'green', 'yellow', 'red'],
          datasets: [{
            data: this.randNums(4),
            backgroundColor: ['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14']
          }]
        }
      })
    },

    refreshPie() {
      this.pie.data.datasets[0].data = this.randNums(4)
      this.pie.update()
    },

    initDonut() {
      new Chart(this.$refs.donut, {
        type: 'doughnut',
        data: {
          labels: ['blue', 'green', 'yellow', 'red'],
          datasets: [{
            data: this.randNums(4),
            backgroundColor: ['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14']
          }]
        }
      })
    },

    initPolar() {
      new Chart(this.$refs.polar, {
        type: 'polarArea',
        data: {
          labels: ['blue', 'green', 'yellow', 'red'],
          datasets: [{
            data: this.randNums(4),
            backgroundColor: ['#2d8cf0', '#19be6b', '#ff9900', '#ed3f14']
          }]
        }
      })
    },

    initRadar() {
      const chart = new Chart(this.$refs.radar, {
        type: 'radar',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            data: [10, 20, 30, 38, 45, 50, 45, 38, 30],
            backgroundColor: 'rgba(34, 118, 235, .35)'
          }]
        },
        options: {
          legend: { display: false },
          tooltips: { enabled: false }
        }
      })

      setInterval(() => {
        const data = chart.data.datasets[0].data
        chart.data.datasets[0].data = data.slice(1).concat(data[0])
        chart.update()
      }, 350)
    },

    initBar() {
      const chart = new Chart(this.$refs.bar, {
        type: 'bar',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            data: [10, 20, 30, 38, 45, 50, 45, 38, 30],
            backgroundColor: 'rgba(34, 118, 235, .35)'
          }]
        },
        options: {
          legend: { display: false },
          tooltips: { enabled: false },
          scales: {
            yAxes: [{
              ticks: { beginAtZero: true }
            }]
          }
        }
      })

      setInterval(() => {
        const data = chart.data.datasets[0].data
        chart.data.datasets[0].data = data.slice(1).concat(data[0])
        chart.update()
      }, 350)
    }
  }
}
</script>

<style scoped>
.chart-col {
  padding-bottom: 1rem;
}
</style>
