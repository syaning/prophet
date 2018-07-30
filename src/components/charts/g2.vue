<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Line</p>
          <div ref="line"></div>
        </Card>
      </Col>

      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Bar</p>
          <div ref="bar"></div>
        </Card>
      </Col>

      <Col :xs="24" :md="8" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Polar</p>
          <div ref="polar"></div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import G2 from '@antv/g2'

export default {
  mounted() {
    this.initLine()
    this.initBar()
    this.initPolar()
  },

  methods: {
    initLine() {
      const data = [
        { month: 'Jan', city: 'Tokyo', temperature: 7.0 },
        { month: 'Jan', city: 'London', temperature: 3.9 },
        { month: 'Feb', city: 'Tokyo', temperature: 6.9 },
        { month: 'Feb', city: 'London', temperature: 4.2 },
        { month: 'Mar', city: 'Tokyo', temperature: 9.5 },
        { month: 'Mar', city: 'London', temperature: 5.7 },
        { month: 'Apr', city: 'Tokyo', temperature: 14.5 },
        { month: 'Apr', city: 'London', temperature: 8.5 },
        { month: 'May', city: 'Tokyo', temperature: 18.4 },
        { month: 'May', city: 'London', temperature: 11.9 },
        { month: 'Jun', city: 'Tokyo', temperature: 21.5 },
        { month: 'Jun', city: 'London', temperature: 15.2 },
        { month: 'Jul', city: 'Tokyo', temperature: 25.2 },
        { month: 'Jul', city: 'London', temperature: 17.0 },
        { month: 'Aug', city: 'Tokyo', temperature: 26.5 },
        { month: 'Aug', city: 'London', temperature: 16.6 },
        { month: 'Sep', city: 'Tokyo', temperature: 23.3 },
        { month: 'Sep', city: 'London', temperature: 14.2 },
        { month: 'Oct', city: 'Tokyo', temperature: 18.3 },
        { month: 'Oct', city: 'London', temperature: 10.3 },
        { month: 'Nov', city: 'Tokyo', temperature: 13.9 },
        { month: 'Nov', city: 'London', temperature: 6.6 },
        { month: 'Dec', city: 'Tokyo', temperature: 9.6 },
        { month: 'Dec', city: 'London', temperature: 4.8 }
      ]

      const chart = new G2.Chart({ container: this.$refs.line, height: 350 })
      chart.source(data)
      chart.axis('temperature', {
        label: {
          formatter: val => val + '°C'
        }
      })
      chart.line().position('month*temperature').color('city').shape('smooth')
      chart.render()
    },

    initBar() {
      const data = [
        { name: 'London', month: 'Jan', rainfall: 18.9 },
        { name: 'London', month: 'Feb', rainfall: 28.8 },
        { name: 'London', month: 'Mar', rainfall: 39.3 },
        { name: 'London', month: 'Apr', rainfall: 81.4 },
        { name: 'London', month: 'May', rainfall: 47 },
        { name: 'London', month: 'Jun', rainfall: 20.3 },
        { name: 'London', month: 'Jul', rainfall: 24 },
        { name: 'London', month: 'Aug', rainfall: 35.6 },
        { name: 'Berlin', month: 'Jan', rainfall: 12.4 },
        { name: 'Berlin', month: 'Feb', rainfall: 23.2 },
        { name: 'Berlin', month: 'Mar', rainfall: 34.5 },
        { name: 'Berlin', month: 'Apr', rainfall: 99.7 },
        { name: 'Berlin', month: 'May', rainfall: 52.6 },
        { name: 'Berlin', month: 'Jun', rainfall: 35.5 },
        { name: 'Berlin', month: 'Jul', rainfall: 37.4 },
        { name: 'Berlin', month: 'Aug', rainfall: 42.4 }
      ]

      const chart = new G2.Chart({ container: this.$refs.bar, height: 350 })
      chart.source(data)
      chart.interval().position('month*rainfall').color('name').adjust([{
        type: 'dodge',
        marginRatio: 1 / 32
      }])
      chart.render()
    },

    initPolar() {
      const data = [
        { year: '2001', population: 41.8 },
        { year: '2002', population: 38 },
        { year: '2003', population: 33.7 },
        { year: '2004', population: 30.7 },
        { year: '2005', population: 25.8 },
        { year: '2006', population: 31.7 },
        { year: '2007', population: 33 },
        { year: '2008', population: 46 },
        { year: '2009', population: 38.3 },
        { year: '2010', population: 28 },
        { year: '2011', population: 42.5 },
        { year: '2012', population: 30.3 }
      ]

      const chart = new G2.Chart({ container: this.$refs.polar, height: 350 })
      chart.source(data)
      chart.coord('polar')
      chart.axis(false)
      chart.interval().position('year*population').color('year').style({
        lineWidth: 1,
        stroke: '#fff'
      })
      chart.render()
    }
  }
}
</script>

<style scoped>
.chart-col {
  padding-bottom: 1rem;
}
</style>
