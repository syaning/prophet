<template>
  <Card dis-hover :bordered="false">
    <Row>
      <Col :span="6">
        aaa
      </Col>
      <Col :span="18">
        {{route.name}}
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      route: this.$route
    }
  },

  created() {
    console.log(this.$route)
  }
}
</script>
