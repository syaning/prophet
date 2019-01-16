<template>
  <div>
    <page-header :title="$t('route.basicForm')" :desc="$t('basicForm.desc')"></page-header>
    <Card dis-hover :bordered="false">
      <Form :model="form" laebl-position="right" :label-width="250" style="max-width: 700px;">
        <FormItem :label="$t('basicForm.title')">
          <Input v-model="form.title" :placeholder="$t('basicForm.titlePlaceholder')" />
        </FormItem>
        <FormItem :label="$t('basicForm.date')">
          <DatePicker v-model="form.date" type="daterange" style="width: 100%;"></DatePicker>
        </FormItem>
        <FormItem :label="$t('basicForm.goal')">
          <Input v-model="form.goal" type="textarea" :placeholder="$t('basicForm.goalPlaceholder')" :rows="4" />
        </FormItem>
        <FormItem :label="$t('basicForm.metrics')">
          <Input v-model="form.metrics" type="textarea" :placeholder="$t('basicForm.metricsPlaceholder')" :rows="4" />
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: { PageHeader },

  data() {
    return {
      form: {
        title: '',
        date: ['', ''],
        goal: '',
        metrics: ''
      }
    }
  }
}
</script>
