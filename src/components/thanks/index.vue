<template>
  <div>
    <p><Icon type="heart" color="#ed3f14"></Icon> Thanks for these open-source projects:</p>
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
        { name: 'vue-i18n', url: 'https://kazupon.github.io/vue-i18n/' },
        { name: 'Chart.js', url: 'https://www.chartjs.org/' },
        { name: 'js-cookie', url: 'https://github.com/js-cookie/js-cookie' },
        { name: 'screenfull', url: 'https://github.com/sindresorhus/screenfull.js/' }
      ]
    }
  }
}
</script>
