<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :sm="12" :md=6 class-name="stats-col">
        <Card dis-hover :bordered="false" class="stats-card">
          <i-circle :percent="80" :size="60">
            <span>80%</span>
          </i-circle>
          <div class="stats-content">
            <p>New Visits</p>
            <h3>57,820</h3>
          </div>
          <Icon type="person"></Icon>
        </Card>
      </Col>

      <Col :xs="24" :sm="12" :md=6 class-name="stats-col">
        <Card dis-hover :bordered="false" class="stats-card">
          <i-circle :percent="90" :size="60">
            <span>90%</span>
          </i-circle>
          <div class="stats-content">
            <p>Purchases</p>
            <h3>￥89,745</h3>
          </div>
          <Icon type="social-yen"></Icon>
        </Card>
      </Col>

      <Col :xs="24" :sm="12" :md=6 class-name="stats-col">
        <Card dis-hover :bordered="false" class="stats-card">
          <i-circle :percent="81" :size="60">
            <span>81%</span>
          </i-circle>
          <div class="stats-content">
            <p>Active Users</p>
            <h3>178,391</h3>
          </div>
          <Icon type="happy"></Icon>
        </Card>
      </Col>

      <Col :xs="24" :sm="12" :md=6 class-name="stats-col">
        <Card dis-hover :bordered="false" class="stats-card">
          <i-circle :percent="88" :size="60">
            <span>88%</span>
          </i-circle>
          <div class="stats-content">
            <p>Returned</p>
            <h3>32,592</h3>
          </div>
          <Icon type="refresh"></Icon>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.stats-col {
  margin-bottom: 1rem;
}
.stats-card {
  display: flex;
  align-items: space-between;

  .ivu-card-body {
    width: 100%;
  }

  .ivu-chart-circle {
    float: left;
  }

  .stats-content {
    display: inline-block;
    float: left;
    margin-left: 2rem;
    line-height: 30px;
  }

  i {
    float: right;
    font-size: 3rem;
    line-height: 66px;
    color: #80848f;
  }
}
</style>
