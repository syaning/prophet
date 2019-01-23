export default {
  route: {
    home: 'Home',

    dashboard: 'Dashboard',
    analysis: 'Analysis',
    monitor: 'Monitor',
    workplace: 'Workplace',

    form: 'Form',
    basicForm: 'Basic Form',
    stepForm: 'Step Form',
    stepFormInfo: 'Step Form(write transfer information)',
    stepFormConfirm: 'Step Form(confirm transfer information)',
    stepFormResult: 'Step Form(finished)',
    advancedForm: 'Advanced Form',

    account: 'Account',
    accountCenter: 'Account Center',
    accountSettings: 'Account Settings'
  },

  basicForm: {
    desc: 'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
    submit: 'Submit',
    save: 'Save',

    title: {
      label: 'Title',
      placeholder: 'Give the target a name',
      message: 'Please enter a title'
    },
    date: {
      label: 'Start and end date',
      placeholder: 'Start date ~ End date',
      message: 'Please select the star and end date'
    },
    goal: {
      label: 'Goal description',
      placeholder: 'Please enter your work goals',
      message: 'Please enter a description of the goal'
    },
    metrics: {
      label: 'Metrics',
      placeholder: 'Please enter a metric',
      message: 'Please enter a metric'
    },
    client: {
      label: 'Client',
      placeholder: 'Please describe your customer service, internal customers directly @Name/job number'
    },
    critics: {
      label: 'Inviting critics',
      placeholder: 'Please direct @Name/job number, you can invite up to 5 people'
    },
    weight: {
      label: 'Weight',
      placeholder: 'Please enter weight'
    },
    disclosure: {
      label: 'Target disclosure',
      tip: 'Customers and invitees are shared by default',
      openTo: 'Open to',

      public: 'Public',
      partially_public: 'Partially public',
      private: 'Private'
    }
  },

  stepForm: {
    desc: 'Split a form into multiple steps to guide users.',
    step1: 'Write transfer information',
    step2: 'Confirm transfer information',
    step3: 'Finished',
    nextStep: 'Next Step',
    prevStep: 'Prev Step',
    submit: 'Submit',
    continueTransfer: 'Continue Transfer',
    checkBill: 'Check Bill',
    confirm: 'Please check the transfer information.',

    payAccount: {
      label: 'Pay Account',
      message: 'Please select a pay account'
    },
    receiverAccount: {
      label: 'Receiver Account',
      placeholder: 'test@example.com',
      message: 'Please enter receiver account',
      alipay: 'Alipay',
      bank: 'Bank'
    },
    receiverName: {
      label: 'Receiver Name',
      placeholder: 'Please enter receiver name',
      message: 'Please enter receiver name'
    },
    amount: {
      label: 'Amount',
      placeholder: 'Please enter amount',
      message: 'Please enter amount',
      rmb: '(CNY)'
    },
    password: {
      label: 'Password',
      placeholder: 'Please enter password',
      message: 'Password is required'
    },

    result: {
      success: 'Transfer Success',
      desc: 'Expected to arrive within two hours'
    }
  }
}
