<template>
  <div>
    <Alert type="info" show-icon banner>
      组件来源于<a href="https://github.com/iview/iview" target="_blank">iView</a>，更多组件参考<a href="https://www.iviewui.com" target="_blank">官方文档</a>。
    </Alert>

    <Row :gutter="16">
      <Col :xs="24" :md="6" class-name="component-col">
        <Card dis-hover :bordered="false" class="btn-card">
          <p slot="title">Buttons</p>
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
          <Button type="info" ghost>Info</Button>
          <Button type="success" ghost>Success</Button>
          <Button type="warning" ghost>Warning</Button>
          <Button type="error" ghost>Error</Button>
          <Button type="primary" shape="circle" icon="ios-search"></Button>
        </Card>
      </Col>

      <Col :xs="24" :md="6" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Tags</p>
          <Tag color="default">default</Tag>
          <Tag color="primary">primary</Tag>
          <Tag color="success">success</Tag>
          <Tag color="error">error</Tag>
          <Tag color="warning">warning</Tag>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="yellow">yellow</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
          <Tag color="#FFA2D3">Custom Color</Tag>
          <Tag type="border" closable color="primary">closable</Tag>
          <Tag type="dot" closable color="success">dot</Tag>
        </Card>
      </Col>

      <Col :xs="24" :md="8" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Progress</p>
          <Progress :percent="25"></Progress>
          <Progress :percent="45" status="active"></Progress>
          <Progress :percent="65" status="wrong"></Progress>
          <Progress :percent="100"></Progress>
          <Progress :percent="25" hide-info></Progress>
        </Card>
      </Col>

      <Col :xs="24" :md="4" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Timeline</p>
          <Timeline>
            <TimelineItem color="green">Version 1.0</TimelineItem>
            <TimelineItem color="green">Version 2.0</TimelineItem>
            <TimelineItem color="red">Critical Bug</TimelineItem>
            <TimelineItem color="blue">Version 3.0</TimelineItem>
          </Timeline>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col span="24" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Steps</p>
          <Steps :current="1">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </Card>
      </Col>
    </Row>

    <Row :gutter="16">
      <Col :xs="24" :md="12" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Form</p>
          <Form :model="user" :label-width="80">
            <FormItem label="Username" required>
              <Input v-model="user.username" placeholder="username" />
            </FormItem>
            <FormItem label="Gender" prop="gender" required>
              <RadioGroup v-model="user.gender">
                <Radio label="male">
                  <Icon type="md-male" color="#5cadff"></Icon>
                </Radio>
                <Radio label="female">
                  <Icon type="md-female" color="#e17da8"></Icon>
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="Hobby">
              <CheckboxGroup v-model="user.hobby">
                <Checkbox label="music">Music</Checkbox>
                <Checkbox label="movie">Movie</Checkbox>
                <Checkbox label="sports">Sports</Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="Active">
              <i-switch v-model="user.active" size="small" />
            </FormItem>
            <FormItem label="City">
              <Select v-model="user.city">
                <Option value="newyork">New York</Option>
                <Option value="london">London</Option>
                <Option value="la">L.A.</Option>
              </Select>
            </FormItem>
            <FormItem label="Birthday">
              <DatePicker type="date" v-model="user.birthday" style="width: 100%;"></DatePicker>
            </FormItem>
            <FormItem label="Rate">
              <Rate v-model="user.rate" />
            </FormItem>
            <FormItem label="Color">
              <ColorPicker v-model="user.color" size="small" />
            </FormItem>
          </Form>
        </Card>
      </Col>

      <Col :xs="24" :md="12">
        <Card dis-hover :bordered="false">
          <p slot="title">Tab</p>
          <Tabs value="tab1">
            <TabPane v-for="i in [1, 2, 3]" :key="i" :label="`Tab${i}`" :name="`tab${i}`">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        gender: '',
        hobby: [],
        active: true,
        city: '',
        birthday: '',
        rate: 4,
        color: '#2b85e4'
      }
    }
  }
}
</script>

<style scoped>
.btn-card button {
  margin-bottom: 5px;
}

.component-col {
  margin-bottom: 1rem;
}
</style>
