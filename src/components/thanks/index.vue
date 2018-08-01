<template>
  <div>
    <p><Icon type="ios-heart" color="#ed3f14"></Icon> Thanks for these open-source projects:</p>
    <ul style="margin-left: 1.5rem;">
      <li v-for="pj in projects" :key="pj.name">
        <a :href="pj.url" target="_blank">{{ pj.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { name: 'Vue', url: 'https://vuejs.org/' },
        { name: 'iView', url: 'https://www.iviewui.com/' },
        { name: 'vue-router', url: 'https://router.vuejs.org/' },
        { name: 'Vuex', url: 'https://vuex.vuejs.org/' },
        { name: 'vue-i18n', url: 'https://kazupon.github.io/vue-i18n/' },
        { name: 'Chart.js', url: 'https://www.chartjs.org/' },
        { name: '@antv/g2', url: 'https://antv.alipay.com' },
        { name: 'quill', url: 'https://quilljs.com/' },
        { name: 'js-cookie', url: 'https://github.com/js-cookie/js-cookie' },
        { name: 'js-base64', url: 'https://github.com/dankogai/js-base64' },
        { name: 'screenfull', url: 'https://github.com/sindresorhus/screenfull.js/' }
      ]
    }
  }
}
</script>
