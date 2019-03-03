<template>
  <Card dis-hover :bordered="false">
    <Tabs value="a">
      <TabPane label="xxx" name="a">
        xxx
      </TabPane>
      <TabPane label="yyy" name="b">
        b
      </TabPane>

      <div slot="extra">
        <span
          v-for="{ title, name } in dateFilters"
          :class="filterClasses(name)"
          :key="name"
          @click="setDateFilter(name)">
          {{ title }}
        </span>
        <DatePicker
          type="daterange"
          v-model="dateRange"
          transfer
          placement="bottom-end"
          style="width: 180px;">
        </DatePicker>
      </div>
    </Tabs>
  </Card>
</template>

<script>
import dayjs from 'dayjs'

const prefixCls = 'prophet-analysis-salescard'

export default {
  data() {
    return {
      dateRange: [],
      dateFilter: ''
    }
  },

  computed: {
    dateFilters() {
      return [
        { title: 'Today', name: 'day' },
        { title: 'This Week', name: 'week' },
        { title: 'This Month', name: 'month' },
        { title: 'This Year', name: 'year' }
      ]
    }
  },

  watch: {
    dateFilter(val) {
      const today = dayjs()
      switch (val) {
        case 'day':
          this.dateRange = [today.toDate(), today.toDate()]
          break
        case 'week':
          this.dateRange = [
            today.startOf('week').toDate(),
            today.endOf('week').toDate()
          ]
          break
        case 'month':
          this.dateRange = [
            today.startOf('month').toDate(),
            today.endOf('month').toDate()
          ]
          break
        case 'year':
          this.dateRange = [
            today.startOf('year').toDate(),
            today.endOf('year').toDate()
          ]
          break
      }
    }
  },

  created() {
    this.setDateFilter('day')
  },

  methods: {
    filterClasses(name) {
      const cls = `${prefixCls}-filter`
      return [
        cls,
        this.dateFilter === name ? `${cls}-active` : ''
      ]
    },

    setDateFilter(name) {
      this.dateFilter = name
    }
  }
}
</script>

<style lang="less">
.prophet-analysis-salescard {
  &-filter {
    cursor: pointer;
    margin-right: 16px;

    &-active {
      color: #2d8cf0;
    }
  }
}
</style>
