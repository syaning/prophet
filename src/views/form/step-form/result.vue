<template>
  <div class="step-form-result">
    <div style="text-align: center;">
      <Icon class="step-form-result-icon" type="ios-checkmark-circle" size="72" color="#52c41a" />
      <p class="step-form-result-title">
        {{ $t('stepForm.result.success') }}
      </p>
      <p class="step-form-result-desc">
        {{ $t('stepForm.result.desc') }}
      </p>
    </div>

    <Form class="step-form-result-extra" :label-width="150">
      <FormItem :label="$t('stepForm.payAccount.label')">
        <span>{{ transaction.payAccount }}</span>
      </FormItem>
      <FormItem :label="$t('stepForm.receiverAccount.label')">
        <span>{{ transaction.receiverAccount }}</span>
      </FormItem>
      <FormItem :label="$t('stepForm.receiverName.label')">
        <span>{{ transaction.receiverName }}</span>
      </FormItem>
      <FormItem :label="$t('stepForm.amount.label')">
        <span>{{ transaction.amount }}</span>
        <span>元</span>
      </FormItem>
    </Form>

    <div class="step-form-result-actions">
      <Button type="primary" @click="createTransaction">再转一笔</Button>
      <Button style="margin-left: 8px;">查看账单</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },

  methods: {
    createTransaction() {
      this.$router.push({ name: 'step-form-info' })
    }
  }
}
</script>

<style lang="less">
.step-form-result {
  &-icon {
    margin-bottom: 24px;
  }

  &-title {
    font-size: 24px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 16px;
  }

  &-desc {
    color: rgba(0,0,0,.45);
    margin-bottom: 24px;
    font-size: 14px;
  }

  &-extra {
    background: #fafafa;
    padding: 24px 40px;

    .ivu-form-item {
      margin-bottom: 5px;
    }

    .ivu-form-item-label::after {
      content: ":";
      margin: 0 8px 0 2px;
    }
  }

  &-actions {
    padding-bottom: 16px;
    margin-top: 32px;
    text-align: center;
  }
}
</style>
