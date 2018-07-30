<template>
  <div>
    <Alert type="info" show-icon banner>
      组件来源于<a href="https://github.com/iview/iview" target="_blank">iView</a>，更多组件参考<a href="https://www.iviewui.com" target="_blank">官方文档</a>。
    </Alert>

    <Row :gutter="16">
      <Col :xs="24" :md="4" class-name="component-col">
        <Card dis-hover :bordered="false" class="btn-card">
          <p slot="title">Buttons</p>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
          <Button type="primary">Primary</Button>
          <Button type="ghost">Ghost</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <Button type="primary" shape="circle" icon="ios-search"></Button>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="chevron-left"></Icon>
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="chevron-right"></Icon>
            </Button>
          </ButtonGroup>
        </Card>
      </Col>

      <Col :xs="24" :md="4" class-name="component-col">
        <Card dis-hover :bordered="false">
          <p slot="title">Tags</p>
          <Tag closable color="blue">Tag 1</Tag>
          <Tag closable color="green">Tag 2</Tag>
          <Tag closable color="red">Tag 3</Tag>
          <Tag closable color="yellow">Tag 4</Tag>
          <Tag type="border" closable color="blue">Tag 1</Tag>
          <Tag type="border" closable color="green">Tag 2</Tag>
          <Tag type="border" closable color="red">Tag 3</Tag>
          <Tag type="border" closable color="yellow">Tag 4</Tag>
          <Tag type="dot" closable color="blue">Tag 1</Tag>
          <Tag type="dot" closable color="green">Tag 2</Tag>
          <Tag type="dot" closable color="red">Tag 3</Tag>
          <Tag type="dot" closable color="yellow">Tag 4</Tag>
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

      <Col :xs="24" :md="8" class-name="component-col">
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
