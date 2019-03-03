<template>
  <div>
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="24">
        <sales-card></sales-card>
      </Col>
    </Row>
  </div>
</template>

<script>
import SalesCard from './SalesCard'

export default {
  components: {
    SalesCard
  }
}
</script>
