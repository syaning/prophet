<template>
  <exception
    :title="$t('exception.403.title')"
    :desc="$t('exception.403.desc')"
    :imgUrl="img">
  </exception>
</template>

<script>
import Exception from '@/components/exception'
import img from '@/assets/403.svg'

export default {
  components: { Exception },

  data() {
    return { img }
  }
}
</script>
