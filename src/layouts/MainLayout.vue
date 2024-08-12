<template lang="pug">
main(class="main")
  router-view(name="top")
  router-view(class="container")
  router-view(name="footer")
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',
})
</script>
