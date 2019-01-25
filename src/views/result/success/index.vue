<template>
  <div>
    <page-header></page-header>
    <Card dis-hover :bordered="false">
      success
    </Card>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header'

export default {
  components: { PageHeader }
}
</script>
