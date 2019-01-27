<template>
  <div>
    <page-header></page-header>

    <result
      type="success"
      :title="$t('result.success.title')"
      :desc="$t('result.success.desc')">

      <template slot="extra">
        <div class="result-success-extra-title">
          {{ $t('result.success.extraTitle') }}
        </div>
        <Row style="margin-bottom: 16px;">
          <Col :md="12" :lg="6">
            <span style="color: rgba(0, 0, 0, 0.85);">
              {{ $t('result.success.projectID') }}
            </span>
            23421
          </Col>
          <Col :md="12" :lg="6">
            <span style="color: rgba(0, 0, 0, 0.85);">
              {{ $t('result.success.projectOwner') }}
            </span>
            {{ $t('result.success.user1') }}
          </Col>
          <Col :md="24" :lg="12">
            <span style="color: rgba(0, 0, 0, 0.85);">
              {{ $t('result.success.validTime') }}
            </span>
            2016-12-12 ~ 2017-12-12
          </Col>
        </Row>
        <Steps :current="1" size="small" class="result-success-steps">
          <Step :title="$t('result.success.step1')" :content="`${$t('result.success.user1')} 2016-12-12 12:32`"></Step>
          <Step :title="$t('result.success.step2')" :content="$t('result.success.user2')"></Step>
          <Step :title="$t('result.success.step3')"></Step>
          <Step :title="$t('result.success.step4')"></Step>
        </Steps>
      </template>

      <template slot="actions">
        <Button type="primary">{{ $t('result.success.actionReturn') }}</Button>
        <Button style="margin-left: 8px;">{{ $t('result.success.actionView') }}</Button>
        <Button style="margin-left: 8px;">{{ $t('result.success.actionPrint') }}</Button>
      </template>
    </result>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import Result from '@/components/result'

export default {
  components: {
    PageHeader,
    Result
  }
}
</script>

<style lang="less">
.result-success-extra-title {
  font-size: 16px;
  font-weight: 500;
  color: rgb(0,0,0,.85);
  margin-bottom: 16px;
}

.result-success-steps {
  .ivu-steps-head,
  .ivu-steps-title {
    background: #fafafa;
  }
}
</style>
