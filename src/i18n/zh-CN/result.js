export default {
  success: {
    title: '提交成功',
    desc: '提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。',

    extraTitle: '项目名称',
    projectID: '项目ID：',
    projectOwner: '负责人：',
    validTime: '生效时间：',

    step1: '创建项目',
    step2: '部门初审',
    step3: '财务复核',
    step4: '完成',

    user1: '曲丽丽',
    user2: '周毛毛',

    actionReturn: '返回列表',
    actionView: '查看项目',
    actionPrint: '打印'
  },

  fail: {
    title: '提交失败',
    desc: '请核对并修改以下信息后，再重新提交。',

    extraTitle: '您提交的内容有如下错误：',
    extraItem1: '您的账户已被冻结',
    extraItem2: '您的账户还不具备申请资格',
    extraItem1Action: '立即解冻',
    extraItem2Action: '立即升级',

    actionReturn: '返回修改'
  }
}
