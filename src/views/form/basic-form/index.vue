<template>
  <div>
    <page-header :title="$t('route.basicForm')" :desc="$t('basicForm.desc')"></page-header>
    <Card dis-hover :bordered="false">
      <Form ref="form" :model="form" :rules="rules" :label-width="250" style="max-width: 750px;">
        <FormItem :label="$t('basicForm.title.label')" prop="title">
          <Input v-model="form.title" :placeholder="$t('basicForm.title.placeholder')" />
        </FormItem>
        <FormItem :label="$t('basicForm.date.label')" prop="date">
          <DatePicker v-model="form.date" type="daterange" :placeholder="$t('basicForm.date.placeholder')" style="width: 100%;"></DatePicker>
        </FormItem>
        <FormItem :label="$t('basicForm.goal.label')" prop="goal">
          <Input v-model="form.goal" type="textarea" :placeholder="$t('basicForm.goal.placeholder')" :rows="4" />
        </FormItem>
        <FormItem :label="$t('basicForm.metrics.label')" prop="metrics">
          <Input v-model="form.metrics" type="textarea" :placeholder="$t('basicForm.metrics.placeholder')" :rows="4" />
        </FormItem>
        <FormItem :label="$t('basicForm.client.label')" prop="client">
          <Input v-model="form.client" :placeholder="$t('basicForm.client.placeholder')" />
        </FormItem>
        <FormItem :label="$t('basicForm.critics.label')" prop="critics">
          <Input v-model="form.critics" :placeholder="$t('basicForm.critics.placeholder')" />
        </FormItem>
        <FormItem :label="$t('basicForm.weight.label')" prop="weight">
          <InputNumber :max="100" :min="0" v-model="form.weight" :placeholder="$t('basicForm.weight.placeholder')"></InputNumber>
          <span style="margin-left: 10px;">%</span>
        </FormItem>
        <FormItem :label="$t('basicForm.disclosure.label')" prop="disclosure">
          <RadioGroup v-model="form.disclosure">
            <Radio v-for="dc in disclosures" :key="dc" :label="dc">
              {{ $t(`basicForm.disclosure.${dc}`) }}
            </Radio>
          </RadioGroup>
          <div>
            <Select v-if="form.disclosure === 'partially_public'" v-model="form.opento" :placeholder="$t('basicForm.disclosure.openTo')" multiple>
              <Option v-for="colleague in colleagues" :key="colleague" :value="colleague">
                {{ colleague }}
              </Option>
            </Select>
            <p style="color: rgba(0,0,0,.45);">{{ $t('basicForm.disclosure.tip') }}</p>
          </div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit">{{ $t('basicForm.submit') }}</Button>
          <Button type="default" @click="save" style="margin-left: 8px;">{{ $t('basicForm.save') }}</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'

export default {
  components: { PageHeader },

  data() {
    return {
      form: {
        title: '',
        date: ['', ''],
        goal: '',
        metrics: '',
        client: '',
        critics: '',
        weight: 0,
        disclosure: 'public',
        opento: []
      },
      disclosures: ['public', 'partially_public', 'private'],
      colleagues: ['Colleague A', 'Colleague B', 'Colleague C']
    }
  },

  computed: {
    rules() {
      return {
        title: [{ required: true, message: this.$t('basicForm.title.message') }],
        date: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value.length === 2 && value[0] && value[1]) {
              callback()
            } else {
              callback(new Error(this.$t('basicForm.date.message')))
            }
          }
        }],
        goal: [{ required: true, message: this.$t('basicForm.goal.message') }],
        metrics: [{ required: true, message: this.$t('basicForm.metrics.message') }]
      }
    }
  },

  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // do something
        }
      })
    },

    save() {
      // do something
    }
  }
}
</script>
