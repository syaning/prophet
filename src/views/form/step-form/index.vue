<template>
  <div>
    <page-header
      :title="$t('route.stepForm')"
      :desc="$t('stepForm.desc')">
    </page-header>

    <Card dis-hover :bordered="false">
      <Steps :current="currentStep - 1" class="step-form-steps">
        <Step :title="$t('stepForm.step1')"></Step>
        <Step :title="$t('stepForm.step2')"></Step>
        <Step :title="$t('stepForm.step3')"></Step>
      </Steps>

      <router-view :transaction="transaction"></router-view>
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'

export default {
  components: { PageHeader },

  data() {
    return {
      currentStep: 1,
      transaction: {
        payAccount: 'alice@example.com',
        receiverAccountType: 'alipay',
        receiverAccount: 'test@example.com',
        receiverName: 'Alex',
        amount: 500
      }
    }
  }
}
</script>

<style lang="less">
.step-form-steps {
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 16px auto;

  .ivu-steps-item:last-child {
    width: auto !important;
  }

  .ivu-steps-title {
    margin-bottom: 0;
    line-height: 26px;
  }
}
</style>
