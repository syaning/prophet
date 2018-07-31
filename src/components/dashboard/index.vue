<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :sm="12" :md="6" v-for="stat in stats" :key="stat.title" class-name="stats-col">
        <Card dis-hover :bordered="false" class="stats-card">
          <i-circle :percent="stat.percent" :size="60">
            <span>{{ stat.percent + '%' }}</span>
          </i-circle>
          <div class="stats-content">
            <p>{{ stat.title }}</p>
            <h3>{{ stat.val | number }}</h3>
          </div>
          <Icon :type="stat.icon"></Icon>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { title: 'New Visits', val: 57820, percent: 80, icon: 'md-person' },
        { title: 'Purchases', val: 89745, percent: 90, icon: 'logo-usd' },
        { title: 'Active Users', val: 178391, percent: 80, icon: 'md-happy' },
        { title: 'Returned', val: 32592, percent: 88, icon: 'md-refresh' }
      ]
    }
  }
}
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
