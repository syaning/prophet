<template>
  <div>
    <page-header></page-header>

    <result
      type="fail"
      :title="$t('result.fail.title')"
      :desc="$t('result.fail.desc')">

      <template slot="extra">
        <div class="result-fail-extra-title">
          {{ $t('result.fail.extraTitle') }}
        </div>
        <div class="result-fail-extra-item" style="margin-bottom: 16px;">
          <Icon type="ios-close-circle-outline" />
          <span>{{ $t('result.fail.extraItem1') }}</span>
          <a>
            {{ $t('result.fail.extraItem1Action') }}
            <Icon type="ios-arrow-forward" />
          </a>
        </div>
        <div class="result-fail-extra-item">
          <Icon type="ios-close-circle-outline" />
          <span>{{ $t('result.fail.extraItem2') }}</span>
          <a>
            {{ $t('result.fail.extraItem2Action') }}
            <Icon type="ios-arrow-forward" />
          </a>
        </div>
      </template>

      <template slot="actions">
        <Button type="primary">{{ $t('result.fail.actionReturn') }}</Button>
      </template>
    </result>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'
import Result from '@/components/result'

export default {
  components: {
    PageHeader,
    Result
  }
}
</script>

<style lang="less" scoped>
.result-fail-extra-title {
  font-size: 16px;
  font-weight: 500;
  color: rgb(0,0,0,.85);
  margin-bottom: 16px;
}

.result-fail-extra-item {
  > i {
    color: #ed0414;
    margin-right: 8px;
    vertical-align: inherit;
  }

  > a {
    margin-left: 16px;
  }
}
</style>
