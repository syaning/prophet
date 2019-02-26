<template>
  <exception
    :title="$t('exception.404.title')"
    :desc="$t('exception.404.desc')"
    :imgUrl="img">
  </exception>
</template>

<script>
import Exception from '@/components/exception'
import img from '@/assets/404.svg'

export default {
  components: { Exception },

  data() {
    return { img }
  }
}
</script>
