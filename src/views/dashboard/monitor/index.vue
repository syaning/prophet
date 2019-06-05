<template>
  <div>
    <Row :gutter="16" style="margin-bottom: 16px;">
      <Col :xs="24" :sm="24" :md="18" :lg="18">
        <RealtimeTrade></RealtimeTrade>
      </Col>
      <Col :xs="24" :sm="24" :md="6" :lg="6">
        <Prediction></Prediction>
        <Gauge style="margin-top: 16px;"></Gauge>
      </Col>
    </Row>

    <Row :gutter="16">
      <Col :xs="24" :sm="24" :md="12" :lg="12">
        <Percent></Percent>
      </Col>
    </Row>
  </div>
</template>

<script>
import RealtimeTrade from './chart/RealtimeTrade'
import Prediction from './chart/Prediction'
import Gauge from './chart/Gauge'
import Percent from './chart/Percent'

export default {
  components: {
    RealtimeTrade,
    Prediction,
    Gauge,
    Percent
  }
}
</script>
