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

      <router-view
        :transaction="transaction"
        @prev="prevStep"
        @next="nextStep"
        style="max-width: 500px; margin: 40px auto 0;">
      </router-view>
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'

export default {
  components: { PageHeader },

  data() {
    return {
      transaction: {
        payAccount: 'alice@example.com',
        receiverAccountType: 'alipay',
        receiverAccount: 'test@example.com',
        receiverName: 'Alex',
        amount: 500
      }
    }
  },

  computed: {
    currentStep() {
      const steps = [
        'step-form-info',
        'step-form-confirm',
        'step-form-result'
      ]
      return steps.indexOf(this.$route.name) + 1
    }
  },

  methods: {
    prevStep() {
      if (this.currentStep === 2) {
        this.$router.push({ name: 'step-form-info' })
      }
    },

    nextStep() {
      if (this.currentStep === 1) {
        this.$router.push({ name: 'step-form-confirm' })
      } else if (this.currentStep === 2) {
        this.$router.push({ name: 'step-form-result' })
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
