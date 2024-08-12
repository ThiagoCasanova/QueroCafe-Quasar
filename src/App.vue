<template lang="pug">
  router-view(v-slot="{ Component, route }")
    transition(:name="route.meta.transition || 'fade'", appear, mode="out-in")
      component(:is="Component", :key="route.path")
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
