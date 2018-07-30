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

    <Row :gutter="16">
      <Col :xs="24" :md="12" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Scatter</p>
          <div ref="scatter"></div>
        </Card>
      </Col>

      <Col :xs="24" :md="12" class-name="chart-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Area</p>
          <div ref="area"></div>
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
    this.initScatter()
    this.initArea()
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

      const chart = new G2.Chart({
        container: this.$refs.line,
        forceFit: true,
        height: 350
      })
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

      const chart = new G2.Chart({
        container: this.$refs.bar,
        forceFit: true,
        height: 350
      })
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

      const chart = new G2.Chart({
        container: this.$refs.polar,
        forceFit: true,
        height: 350
      })
      chart.source(data)
      chart.coord('polar')
      chart.axis(false)
      chart.interval().position('year*population').color('year').style({
        lineWidth: 1,
        stroke: '#fff'
      })
      chart.render()
    },

    initScatter() {
      const randRange = (x, y) => (Math.random() * (y - x) >> 0) + x
      const data = []

      for (let i = 0; i < 50; i++) {
        data.push({ gender: 'male', height: randRange(160, 190), weight: randRange(60, 100) })
        data.push({ gender: 'female', height: randRange(150, 175), weight: randRange(40, 70) })
      }

      const chart = new G2.Chart({
        container: this.$refs.scatter,
        forceFit: true,
        height: 350
      })
      chart.source(data)
      chart.point().position('height*weight').color('gender').size(4).opacity('0.65').shape('circle')
      chart.render()
    },

    initArea() {
      const data = [
        { time: 1246406400000, temperature: [14.3, 27.7] },
        { time: 1246492800000, temperature: [14.5, 27.8] },
        { time: 1246579200000, temperature: [15.5, 29.6] },
        { time: 1246665600000, temperature: [16.7, 30.7] },
        { time: 1246752000000, temperature: [16.5, 25.0] },
        { time: 1246838400000, temperature: [17.8, 25.7] },
        { time: 1246924800000, temperature: [13.5, 24.8] },
        { time: 1247011200000, temperature: [10.5, 21.4] },
        { time: 1247097600000, temperature: [9.2, 23.8] },
        { time: 1247184000000, temperature: [11.6, 21.8] },
        { time: 1247270400000, temperature: [10.7, 23.7] },
        { time: 1247356800000, temperature: [11.0, 23.3] },
        { time: 1247443200000, temperature: [11.6, 23.7] },
        { time: 1247529600000, temperature: [11.8, 20.7] },
        { time: 1247616000000, temperature: [12.6, 22.4] },
        { time: 1247702400000, temperature: [13.6, 19.6] },
        { time: 1247788800000, temperature: [11.4, 22.6] },
        { time: 1247875200000, temperature: [13.2, 25.0] },
        { time: 1247961600000, temperature: [14.2, 21.6] },
        { time: 1248048000000, temperature: [13.1, 17.1] },
        { time: 1248134400000, temperature: [12.2, 15.5] },
        { time: 1248220800000, temperature: [12.0, 20.8] },
        { time: 1248307200000, temperature: [12.0, 17.1] },
        { time: 1248393600000, temperature: [12.7, 18.3] },
        { time: 1248480000000, temperature: [12.4, 19.4] },
        { time: 1248566400000, temperature: [12.6, 19.9] },
        { time: 1248652800000, temperature: [11.9, 20.2] },
        { time: 1248739200000, temperature: [11.0, 19.3] },
        { time: 1248825600000, temperature: [10.8, 17.8] },
        { time: 1248912000000, temperature: [11.8, 18.5] },
        { time: 1248998400000, temperature: [10.8, 16.1] }
      ]

      const averages = [
        { time: 1246406400000, temperature: 21.5 },
        { time: 1246492800000, temperature: 22.1 },
        { time: 1246579200000, temperature: 23 },
        { time: 1246665600000, temperature: 23.8 },
        { time: 1246752000000, temperature: 21.4 },
        { time: 1246838400000, temperature: 21.3 },
        { time: 1246924800000, temperature: 18.3 },
        { time: 1247011200000, temperature: 15.4 },
        { time: 1247097600000, temperature: 16.4 },
        { time: 1247184000000, temperature: 17.7 },
        { time: 1247270400000, temperature: 17.5 },
        { time: 1247356800000, temperature: 17.6 },
        { time: 1247443200000, temperature: 17.7 },
        { time: 1247529600000, temperature: 16.8 },
        { time: 1247616000000, temperature: 17.7 },
        { time: 1247702400000, temperature: 16.3 },
        { time: 1247788800000, temperature: 17.8 },
        { time: 1247875200000, temperature: 18.1 },
        { time: 1247961600000, temperature: 17.2 },
        { time: 1248048000000, temperature: 14.4 },
        { time: 1248134400000, temperature: 13.7 },
        { time: 1248220800000, temperature: 15.7 },
        { time: 1248307200000, temperature: 14.6 },
        { time: 1248393600000, temperature: 15.3 },
        { time: 1248480000000, temperature: 15.3 },
        { time: 1248566400000, temperature: 15.8 },
        { time: 1248652800000, temperature: 15.2 },
        { time: 1248739200000, temperature: 14.8 },
        { time: 1248825600000, temperature: 14.4 },
        { time: 1248912000000, temperature: 15 },
        { time: 1248998400000, temperature: 13.6 }
      ]

      const chart = new G2.Chart({
        container: this.$refs.area,
        forceFit: true,
        height: 350
      })

      chart.scale({
        temperature: {
          sync: true
        },
        time: {
          type: 'time',
          mask: 'MM-DD',
          tickInterval: 24 * 3600 * 1000 * 2
        }
      })
      chart.tooltip({ crosshairs: { type: 'line' } })

      const view1 = chart.view()
      view1.source(data)
      view1.area().position('time*temperature').tooltip(false)

      const view2 = chart.view()
      view2.source(averages)
      view2.axis(false)
      view2.line().position('time*temperature').size(2)
      view2.point().position('time*temperature').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
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
