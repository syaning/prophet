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
      <Col span="24">
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
  </div>
</template>

<style scoped>
.btn-card button {
  margin-bottom: 5px;
}

.component-col {
  margin-bottom: 1rem;
}
</style>
