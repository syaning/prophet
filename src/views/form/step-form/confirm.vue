<template>
  <div>
    <Alert show-icon closable>
      {{ $t('stepForm.confirm') }}
    </Alert>

    <Form class="step-form-confirm" :label-width="150">
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
        <span style="margin-left: 5px;">{{ $t('stepForm.amount.rmb') }}</span>
      </FormItem>
    </Form>

    <Divider />

    <Form ref="form" :model="form" :rules="rules" :label-width="120">
      <FormItem :label="$t('stepForm.password.label')" prop="password">
        <Input v-model="form.password" type="password" :placeholder="$t('stepForm.password.placeholder')" />
      </FormItem>
      <FormItem>
        <Button @click="$emit('prev')" style="margin-right: 8px;">
          {{ $t('stepForm.prevStep') }}
        </Button>
        <Button type="primary" :loading="loading" @click="submit">
          {{ $t('stepForm.submit') }}
        </Button>
      </FormItem>
    </Form>
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

  data() {
    return {
      form: {
        password: '123456'
      },
      rules: {
        password: [
          { required: true, message: this.$t('stepForm.password.message') }
        ]
      },
      loading: false
    }
  },

  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.$emit('next')
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="less">
.step-form-confirm {
  .ivu-form-item {
    margin-bottom: 5px;
  }

  .ivu-form-item-label::after {
    content: ":";
    margin: 0 8px 0 2px;
  }
}
</style>
