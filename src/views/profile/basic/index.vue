<template>
  <div>
    <page-header :title="$t('route.basicProfile')"></page-header>

    <Card dis-hover :bordered="false">
      <description-list title="退款申请" :items="applyItems"></description-list>
      <Divider></Divider>
      <description-list title="用户信息" :items="userItems"></description-list>
      <Divider></Divider>
      <div class="prophet-profile-basic-title">退货商品</div>
      <Table :columns="goodsColumns" :data="goods" style="margin-bottom: 24px;"></Table>
      <div class="prophet-profile-basic-title">退货进度</div>
      <Table :columns="processColumns" :data="processes"></Table>
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import DescriptionList from '@/components/description-list'

export default {
  components: {
    PageHeader,
    DescriptionList
  },

  data() {
    const renderPrice = (h, val) => {
      return h('span', typeof val === 'number' ? val.toFixed(2) : val)
    }

    return {
      applyItems: [
        { key: '取货单号', value: '1000000000' },
        { key: '状态', value: '已取货' },
        { key: '销售单号', value: '1234123421' },
        { key: '子订单', value: '3214321432' }
      ],

      userItems: [
        { key: '用户姓名', value: '付小小' },
        { key: '联系电话', value: '18100000000' },
        { key: '常用快递', value: '菜鸟仓储' },
        { key: '取货地址', value: '浙江省杭州市西湖区万塘路18号' },
        { key: '备注', value: '无' }
      ],

      goods: [{
        id: '1234561',
        name: '矿泉水 550ml',
        code: '12421432143214321',
        price: 2,
        count: 1,
        total: 2
      }, {
        id: '1234562',
        name: '凉茶 300ml',
        code: '12421432143214322',
        price: 3,
        count: 2,
        total: 6
      }, {
        id: '1234563',
        name: '好吃的薯片',
        code: '12421432143214323',
        price: 7,
        count: 4,
        total: 28
      }, {
        id: '1234564',
        name: '特别好吃的蛋卷',
        code: '12421432143214324',
        price: 8.5,
        count: 3,
        total: 25.5
      }, {
        id: '总计',
        count: 10,
        total: 61.5,
        sum: true
      }],

      goodsColumns: [
        {
          title: '商品编号',
          render: (h, params) => {
            return h(params.row.sum ? 'strong' : 'a', params.row.id)
          }
        },
        { title: '商品名称', key: 'name' },
        { title: '商品条码', key: 'code' },
        {
          title: '单价',
          align: 'right',
          render: (h, params) => renderPrice(h, params.row.price)
        },
        { title: '数量（件）', key: 'count', align: 'right' },
        {
          title: '金额',
          align: 'right',
          render: (h, params) => renderPrice(h, params.row.total)
        }
      ],

      processes: [{
        time: '2017-10-01 14:10',
        process: '联系客户',
        status: '进行中',
        operator: '取货员 ID1234',
        duration: '5mins'
      }, {
        time: '2017-10-01 14:05',
        process: '取货员出发 ',
        status: '成功',
        operator: '取货员 ID1234',
        duration: '1h'
      }, {
        time: '2017-10-01 13:05',
        process: '取货员接单',
        status: '成功',
        operator: '取货员 ID1234',
        duration: '5mins'
      }, {
        time: '2017-10-01 13:00',
        process: '申请审批通过',
        status: '成功',
        operator: '系统',
        duration: '1h'
      }, {
        time: '2017-10-01 12:00',
        process: '发起退货申请',
        status: '成功',
        operator: '用户',
        duration: '5mins'
      }],

      processColumns: [
        { title: '时间', key: 'time' },
        { title: '当前进度', key: 'process' },
        {
          title: '状态',
          render: (h, params) => {
            const color = params.row.status === '成功' ? 'green' : 'blue'
            return h('Tag', {
              props: { color },
              style: { width: '60px', textAlign: 'center' }
            }, params.row.status)
          }
        },
        { title: '操作员ID', key: 'operator' },
        { title: '耗时', key: 'duration' }
      ]
    }
  }
}
</script>

<style lang="less">
.prophet-profile-basic-title {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0,0,0,.85);
  margin-bottom: 16px;
}
</style>
