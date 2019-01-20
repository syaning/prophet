<template>
  <Form ref="form" :model="transaction" :rules="rules" :label-width="150">
    <FormItem :label="$t('stepForm.payAccount.label')" prop="payAccount">
      <Select v-model="transaction.payAccount">
        <Option v-for="account in accounts" :key="account" :value="account">
          {{ account }}
        </Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('stepForm.receiverAccount.label')" prop="receiverAccount">
      <Input v-model="transaction.receiverAccount" :placeholder="$t('stepForm.receiverAccount.placeholder')">
        <Select v-model="transaction.receiverAccountType" slot="prepend" style="width: 85px;">
          <Option v-for="type in accountTypes" :key="type.value" :value="type.value">
            {{ type.name }}
          </Option>
        </Select>
      </Input>
    </FormItem>
    <FormItem :label="$t('stepForm.receiverName.label')" prop="receiverName">
      <Input v-model="transaction.receiverName" :placeholder="$t('stepForm.receiverName.placeholder')" />
    </FormItem>
    <FormItem :label="$t('stepForm.amount.label')" prop="amount">
      <Input v-model="transaction.amount" :placeholder="$t('stepForm.amount.placeholder')">
        <span slot="prefix" style="line-height: 32px;">￥</span>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="nextStep">{{ $t('stepForm.nextStep') }}</Button>
    </FormItem>
  </Form>
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
      accounts: [
        'alice@example.com',
        'bob@example.com'
      ]
    }
  },

  computed: {
    accountTypes() {
      return [{
        name: this.$t('stepForm.receiverAccount.alipay'),
        value: 'alipay'
      }, {
        name: this.$t('stepForm.receiverAccount.bank'),
        value: 'bank'
      }]
    },

    rules() {
      return {
        payAccount: [
          { required: true, message: this.$t('stepForm.payAccount.message') }
        ],
        receiverAccount: [
          { required: true, message: this.$t('stepForm.receiverAccount.message') }
        ],
        receiverName: [
          { required: true, message: this.$t('stepForm.receiverName.message') }
        ],
        amount: [
          { required: true, message: this.$t('stepForm.amount.message') }
        ]
      }
    }
  },

  methods: {
    nextStep() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('next')
        }
      })
    }
  }
}
</script>
