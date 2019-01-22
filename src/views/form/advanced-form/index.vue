<template>
  <div>
    <page-header
      :title="$t('route.advancedForm')"
      desc="高级表单常见于一次性输入和提交大批量数据的场景。">
    </page-header>

    <Card dis-hover :bordered="false" title="仓库管理">
      <Form :model="warehouse">
        <Row :gutter="16">
          <Col :xs="24" :sm="12" :md="6">
            <FormItem label="仓库名">
              <Input v-model="warehouse.name" placeholder="请输入仓库名称" />
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 6, offset: 2}">
            <FormItem label="仓库域名">
              <Input v-model="warehouse.domain" />
            </FormItem>
          </Col>
          <Col :sm="24" :md="{ span: 6, offset: 2}">
            <FormItem label="仓库管理员">
              <Select v-model="warehouse.owner" placeholder="请选择管理员">
                <Option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
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
      warehouse: {
        name: '',
        domain: '',
        owner: '',
        approver: '',
        dateRange: ['', ''],
        type: ''
      },
      users: [
        { id: 1, name: '付晓晓' },
        { id: 2, name: '周毛毛' }
      ],
      types: [
        { value: 'private', text: '私密' },
        { value: 'public', text: '公开' }
      ]
    }
  }
}
</script>
