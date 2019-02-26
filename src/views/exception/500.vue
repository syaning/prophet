<template>
  <exception
    :title="$t('exception.500.title')"
    :desc="$t('exception.500.desc')"
    :imgUrl="img">
  </exception>
</template>

<script>
import Exception from '@/components/exception'
import img from '@/assets/500.svg'

export default {
  components: { Exception },

  data() {
    return { img }
  }
}
</script>
