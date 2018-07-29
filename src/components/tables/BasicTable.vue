<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :md="12" class-name="table-col">
        <Table stripe :columns="cols1" :data="data"></Table>
      </Col>
      <Col :xs="24" :md="12" class-name="table-col">
        <Table border :columns="cols2" :data="data"></Table>
      </Col>
    </Row>

    <Row>
      <Col span="24">
        <Table :columns="cols3" :data="data"></Table>
      </Col>
    </Row>
  </div>
</template>

<script>
const data = [{
    firstName: 'Mark',
    lastName: 'Otto',
    username: 'mdo',
    email: 'mdo@gmail.com',
    age: 28,
    role: 'admin'
  }, {
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: 'fat',
    email: 'fat@yandex.ru',
    age: 45,
    role: 'admin'
  }, {
    firstName: 'Larry',
    lastName: 'Bird',
    username: 'twitter',
    email: 'twitter@outlook.com',
    age: 18,
    role: 'user'
  }, {
    firstName: 'John',
    lastName: 'Snow',
    username: 'snow',
    email: ' snow@gmail.com',
    age: 20,
    role: 'user'
  }, {
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: 'jack',
    email: 'jack@yandex.ru',
    age: 30,
    role: 'user'
  }
]

export default {
  data() {
    return {
      data,

      cols1: [
        { title: 'First Name', key: 'firstName' },
        { title: 'Last Name', key: 'lastName' },
        { title: 'Username', key: 'username' },
        { title: 'Email', key: 'email' },
        { title: 'Age', key: 'age' }
      ],

      cols2: [
        { title: 'First Name', key: 'firstName' },
        { title: 'Last Name', key: 'lastName' },
        {
          title: 'Username',
          render: (h, params) => {
            return h('strong', `@${params.row.username}`)
          }
        },
        { title: 'Email', key: 'email' },
        { title: 'Age', key: 'age' }
      ],

      cols3: [
        { title: 'First Name', key: 'firstName' },
        { title: 'Last Name', key: 'lastName' },
        {
          title: 'Username',
          render: (h, params) => {
            return h('strong', `@${params.row.username}`)
          }
        },
        {
          title: 'Email',
          render: (h, params) => {
            return h('a', {
              attrs: {
                href: `mailto:${params.row.email}`
              }
            }, params.row.email)
          }
        },
        { title: 'Age', key: 'age' },
        {
          title: 'Role',
          render: (h, params) => {
            const role = params.row.role
            if (role === 'admin') {
              return h('Tag', { props: { color: 'green' } }, role)
            }
            return h('Tag', { props: { color: 'blue' } }, role)
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.table-col {
  margin-bottom: 1rem;
}
</style>
