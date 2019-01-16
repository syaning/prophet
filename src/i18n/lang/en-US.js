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
    advancedForm: 'Advanced Form'
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
  }
}
