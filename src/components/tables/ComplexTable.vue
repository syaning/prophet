<template>
  <div>
    <Table :columns="cols" :data="data" :loading="loading" style="margin-bottom: 1rem;"></Table>
    <Page :current="page" :total="total" :page-size="pagesize" @on-change="toPage"></Page>

    <Modal v-model="modal.del" title="Delete" @on-ok="del">
      确定删除该用户？
    </Modal>

    <Modal v-model="modal.edit" title="Edit" @on-ok="update">
      <Form ref="editForm" :model="currentUser" :rules="rules" :label-width="80">
        <FormItem label="Name" prop="name" required>
          <Input v-model="currentUser.name"></Input>
        </FormItem>
        <FormItem label="Gender" prop="gender" required>
          <RadioGroup v-model="currentUser.gender">
            <Radio label="male">
              <Icon type="male" color="#5cadff"></Icon>
            </Radio>
            <Radio label="female">
              <Icon type="female" color="#e17da8"></Icon>
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Birthday" prop="birthday" required>
          <DatePicker type="date" v-model="currentUser.birthday" style="width: 100%;"></DatePicker>
        </FormItem>
        <FormItem label="City" prop="city">
          <Input v-model="currentUser.city"></Input>
        </FormItem>
        <FormItem label="School" prop="school">
          <Input v-model="currentUser.school"></Input>
        </FormItem>
        <FormItem label="Major" prop="major">
          <Input v-model="currentUser.major"></Input>
        </FormItem>
        <FormItem label="QQ" prop="qq">
          <Input v-model="currentUser.qq"></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="onCancel">取消</Button>
        <Button type="primary" @click="update">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import { createActions } from '@/utils/tableActions'

const data = [
  {
    id: 1, name: '姜谷之', gender: 'male', birthday: '1991-01-03',
    city: '北京', school: '清华大学', major: '电子', qq: '23424325'
  },
  {
    id: 2, name: '邵悦可', gender: 'female', birthday: '1990-03-07',
    city: '北京', school: '北京大学', major: '文学', qq: '5934489'
  },
  {
    id: 3, name: '穆鸿雪', gender: 'female', birthday: '1992-12-15',
    city: '北京', school: '北京大学', major: '哲学', qq: '46457675'
  },
  {
    id: 4, name: '邓笑寒', gender: 'male', birthday: '1990-09-27',
    city: '上海', school: '复旦大学', major: '计算机', qq: '54664532'
  },
  {
    id: 5, name: '蔡雁卉', gender: 'female', birthday: '1997-11-28',
    city: '上海', school: '上海交通大学', major: '软件工程', qq: '56789780'
  },
  {
    id: 6, name: '楼玟玉', gender: 'female', birthday: '1993-12-12',
    city: '上海', school: '复旦大学', major: '新闻', qq: '876534578'
  },
  {
    id: 7, name: '邗茹雪', gender: 'female', birthday: '1995-06-26',
    city: '杭州', school: '浙江大学', major: '生物', qq: '435457687'
  },
  {
    id: 8, name: '冉嘉运', gender: 'male', birthday: '1994-03-28',
    city: '南京', school: '南京大学', major: '计算机', qq: '2379876545'
  },
  {
    id: 9, name: '骆安民', gender: 'male', birthday: '1996-04-17',
    city: '杭州', school: '浙江大学', major: '数学', qq: '564356542'
  },
  {
    id: 10, name: '牧天元', gender: 'male', birthday: '1992-10-08',
    city: '深圳', school: '深圳大学', major: '物理', qq: '4457543757'
  },
  {
    id: 11, name: '闾幼荷', gender: 'female', birthday: '1995-08-09',
    city: '厦门', school: '厦门大学', major: '计算机', qq: '765632856'
  },
  {
    id: 12, name: '凤婉仪', gender: 'female', birthday: '1991-01-29',
    city: '上海', school: '同济大学', major: '建筑', qq: '987643557'
  },
  {
    id: 13, name: '王梓婷', gender: 'female', birthday: '1990-12-29',
    city: '上海', school: '华东师范大学', major: '教育学', qq: '9087453'
  },
  {
    id: 14, name: '斐景行', gender: 'male', birthday: '1993-05-21',
    city: '上海', school: '复旦大学', major: '法学', qq: '3454570086'
  },
  {
    id: 15, name: '耿安歌', gender: 'male', birthday: '1997-09-06',
    city: '上海', school: '上海交通大学', major: '医学', qq: '978654345'
  },
  {
    id: 16, name: '岑静竹', gender: 'female', birthday: '1996-03-07',
    city: '南京', school: '南京大学', major: '文学', qq: '87645787'
  }
]

export default {
  data() {
    const actions = [
      { name: 'edit', title: 'Edit', fn: this.onEdit },
      { name: 'del', title: 'Delete', fn: this.onDel }
    ]

    return {
      data: [],
      page: 1,
      pagesize: 10,
      total: 0,
      loading: false,
      modal: { edit: false, del: false },
      currentUser: {},

      cols: [
        { title: 'Name', key: 'name' },
        {
          title: 'Gender',
          render: (h, params) => {
            const gender = params.row.gender
            if (gender === 'male') {
              return h('Icon', { props: { type: 'male', color: '#5cadff' } })
            } else if (gender === 'female') {
              return h('Icon', { props: { type: 'female', color: '#e17da8' } })
            } else {
              return h('span')
            }
          }
        },
        {
          title: 'Birthday',
          render: (h, params) => {
            return h('span', Vue.filter('date')(params.row.birthday, 'yyyy-MM-dd'))
          }
        },
        { title: 'City', key: 'city' },
        { title: 'School', key: 'school' },
        { title: 'Major', key: 'major' },
        { title: 'QQ', key: 'qq' },
        {
          title: 'Operations',
          render: createActions(actions, this)
        }
      ],

      rules: {
        name: [{ required: true }],
        gender: [{ required: true }],
        birthday: [{ required: true }]
      }
    }
  },

  created() {
    this.loadData(this.page)
  },

  methods: {
    onEdit(row) {
      this.currentUser = Object.assign({}, row)
      this.modal.edit = true
    },

    onCancel() {
      this.modal.edit = false
    },

    update() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === this.currentUser.id) {
              Object.assign(this.data[i], this.currentUser)
              break
            }
          }
          this.modal.edit = false
          this.$Message.success('用户信息更新成功')
        }
      })
    },

    onDel(row) {
      this.currentUser = row
      this.modal.del = true
    },

    del() {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id === this.currentUser.id) {
          this.data.splice(i, 1)
          break
        }
      }
    },

    loadData(page) {
      this.loading = true
      setTimeout(() => {
        const start = this.pagesize * (page - 1)
        this.data = data.slice(start, start + this.pagesize)
        this.total = data.length
        this.loading = false
      }, 500)
    },

    toPage(page) {
      this.page = page
      this.loadData(page)
    }
  }
}
</script>
