<template>
  <div>
    <page-header
      :title="$t('menu.advancedForm')"
      desc="高级表单常见于一次性输入和提交大批量数据的场景。">
    </page-header>

    <Card dis-hover :bordered="false" title="仓库管理">
      <Form ref="warehouseForm" :model="warehouse">
        <Row :gutter="16">
          <Col :xs="24" :sm="12" :md="6">
            <FormItem label="仓库名">
              <Input v-model="warehouse.name" placeholder="请输入仓库名称" />
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 6, offset: 2}">
            <FormItem label="仓库域名">
              <Input v-model="warehouse.domain" placeholder="请输入">
                <span slot="prepend">https://</span>
                <span slot="append">.com</span>
              </Input>
            </FormItem>
          </Col>
          <Col :sm="24" :md="{ span: 8, offset: 2}">
            <FormItem label="仓库管理员">
              <Select v-model="warehouse.owner" placeholder="请选择管理员">
                <Option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>

        <Row :gutter="16">
          <Col :xs="24" :sm="12" :md="6">
            <FormItem label="审批人">
              <Select v-model="warehouse.approver" placeholder="请选择审批人">
                <Option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 6, offset: 2}">
            <FormItem label="生效日期">
              <DatePicker v-model="warehouse.dateRange" type="daterange" placeholder="开始日期 ~ 结束日期" style="width: 100%;"></DatePicker>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 8, offset: 2}">
            <FormItem label="仓库类型">
              <Select v-model="warehouse.type" placeholder="请选择仓库类型">
                <Option v-for="type in types" :key="type.value" :value="type.value">
                  {{ type.text }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>

    <Card dis-hover :bordered="false" title="任务管理" style="margin-top: 20px;">
      <Form ref="taskForm" :model="task">
        <Row :gutter="16">
          <Col :xs="24" :sm="12" :md="6">
            <FormItem label="任务名">
              <Input v-model="task.name" placeholder="请输入任务名" />
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 6, offset: 2}">
            <FormItem label="任务描述">
              <Input v-model="task.name" placeholder="请输入任务描述" />
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 8, offset: 2}">
            <FormItem label="执行人">
              <Select v-model="task.executor" placeholder="请选择执行人">
                <Option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="16">
          <Col :xs="24" :sm="12" :md="6">
            <FormItem label="责任人">
              <Select v-model="task.owner" placeholder="请选择责任人">
                <Option v-for="user in users" :key="user.id" :value="user.id">
                  {{ user.name }}
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 6, offset: 2}">
            <FormItem label="生效时间">
              <DatePicker v-model="task.time" type="datetime" placeholder="提醒时间" style="width: 100%;"></DatePicker>
            </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="{ span: 8, offset: 2}">
            <FormItem label="任务类型">
              <Select v-model="task.type" placeholder="请选择任务类型">
                <Option v-for="type in types" :key="type.value" :value="type.value">
                  {{ type.text }}
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>

    <Card dis-hover :bordered="false" title="成员管理" style="margin-top: 20px;">
      <Table :columns="columns" :data="employees"></Table>
    </Card>

    <div class="advanced-form-toolbar">
      <Button type="primary" @click="submit">提交</Button>
    </div>
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
      task: {
        name: '',
        desc: '',
        executor: '',
        owner: '',
        time: '',
        type: ''
      },
      users: [
        { id: 1, name: '付晓晓' },
        { id: 2, name: '周毛毛' }
      ],
      types: [
        { value: 'private', text: '私密' },
        { value: 'public', text: '公开' }
      ],
      employees: [
        { name: 'John Brown', id: '00001', dept: 'New York No. 1 Lake Park' },
        { name: 'Jim Green', id: '00002', dept: 'London No. 1 Lake Park' },
        { name: 'Joe Black', id: '00003', dept: 'Sidney No. 1 Lake Park' }
      ],
      columns: [
        { title: '成员姓名', key: 'name' },
        { title: '工号', key: 'id' },
        { title: '所属部门', key: 'dept' },
        { title: '操作', key: '' }
      ]
    }
  },

  methods: {
    submit() {
      // ...
    }
  }
}
</script>

<style lang="less">
.advanced-form-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 56px;
  line-height: 56px;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 -1px 2px rgba(0,0,0,.03);
  border-top: 1px solid #e8e8e8;
  z-index: 0;
}
</style>
