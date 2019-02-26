<template>
  <div :class="prefixCls">
    <div :class="imgBlockClasses">
      <div :class="imgClasses" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
    </div>
    <div :class="contentClasses">
      <h1>{{ title }}</h1>
      <div :class="descClasses">{{ desc }}</div>
      <div>
        <router-link to="/">
          <Button type="primary">{{ $t('exception.back') }}</Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'prophet-exception'

export default {
  props: {
    title: {
      type: String,
      required: true
    },

    desc: {
      type: String,
      required: true
    },

    imgUrl: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      prefixCls
    }
  },

  computed: {
    imgBlockClasses() {
      return `${prefixCls}-img-block`
    },

    imgClasses() {
      return `${prefixCls}-img`
    },

    contentClasses() {
      return `${prefixCls}-content`
    },

    descClasses() {
      return `${prefixCls}-content-desc`
    }
  }
}
</script>

<style lang="less">
.prophet-exception {
  display: flex;
  align-items: center;
  min-height: 500px;

  &-img-block {
    flex: 0 0 62.5%;
    width: 62.5%;
    padding-right: 152px;
  }

  &-img {
    float: right;
    width: 100%;
    max-width: 360px;
    height: 360px;
    background-repeat: no-repeat;
  }

  &-content {
    h1 {
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }

    &-desc {
      margin-bottom: 16px;
      color: rgba(0,0,0,.45);
      font-size: 20px;
    }
  }
}
</style>
