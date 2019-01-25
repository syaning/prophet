export default {
  route: {
    home: '首页',

    dashboard: 'Dashboard',
    analysis: '分析页',
    monitor: '监控页',
    workplace: '工作台',

    form: '表单页',
    basicForm: '基础表单',
    stepForm: '分步表单',
    stepFormInfo: '分步表单（填写转账信息）',
    stepFormConfirm: '分步表单（确认转账信息）',
    stepFormResult: '分步表单（完成）',
    advancedForm: '高级表单',

    result: '结果页',
    resultSuccess: '成功页',
    resultFail: '失败页',

    account: '个人页',
    accountCenter: '个人中心',
    accountSettings: '个人设置'
  },

  basicForm: {
    desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
    submit: '提交',
    save: '保存',

    title: {
      label: '标题',
      placeholder: '给目标起个名字',
      message: '请输入标题'
    },
    date: {
      label: '起止日期',
      placeholder: '开始日期 ~ 结束日期',
      message: '请输入起止日期'
    },
    goal: {
      label: '目标描述',
      placeholder: '请输入你的阶段性工作目标',
      message: '请输入目标描述'
    },
    metrics: {
      label: '衡量标准',
      placeholder: '请输入衡量标准',
      message: '请输入衡量标准'
    },
    client: {
      label: '客户',
      placeholder: '请描述你服务的客户，内部客户直接 @姓名/工号'
    },
    critics: {
      label: '选评人',
      placeholder: '请直接 @姓名/工号，最多可邀请5人'
    },
    weight: {
      label: '权重',
      placeholder: '请输入权重'
    },
    disclosure: {
      label: '目标公开',
      tip: '客户、邀评人默认被分享',
      openTo: '公开给',

      public: '公开',
      partially_public: '部分公开',
      private: '不公开'
    }
  },

  stepForm: {
    desc: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
    step1: '填写转账信息',
    step2: '确认转账信息',
    step3: '完成',
    nextStep: '下一步',
    prevStep: '上一步',
    submit: '提交',
    continueTransfer: '再转一笔',
    checkBill: '查看账单',
    confirm: '确认转账后，资金将直接打入对方账户，无法退回。',

    payAccount: {
      label: '付款账户',
      message: '请选择付款账户'
    },
    receiverAccount: {
      label: '收款账户',
      placeholder: 'test@example.com',
      message: '请输入收款账户',
      alipay: '支付宝',
      bank: '银行账户'
    },
    receiverName: {
      label: '收款人姓名',
      placeholder: '请输入收款人姓名',
      message: '请输入收款人姓名'
    },
    amount: {
      label: '转账金额',
      placeholder: '请输入转账金额',
      message: '请输入转账金额',
      rmb: '元'
    },
    password: {
      label: '支付密码',
      placeholder: '请输入支付密码',
      message: '请输入支付密码'
    },

    result: {
      success: '操作成功',
      desc: '预计两小时内到账'
    }
  }
}
