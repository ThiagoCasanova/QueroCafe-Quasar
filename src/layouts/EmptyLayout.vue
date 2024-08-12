<template lang="pug">
main(class="main")
  router-view
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EmptyLayout',
})
</script>


