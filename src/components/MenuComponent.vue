<template lang="pug">
  div(class="menu")
    router-link(:to="{ name: 'home' }")
      i(class="fa-solid fa-chevron-left")
    span Detalhes
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuComponent'
})
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  z-index: 0;
  display: flex;
  flex-flow: row;
  gap: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  padding-top: 19px;
  padding-bottom: 19px;
  padding-left: 27px;
  padding-right: 27px;
  a {
    color: inherit;
  }
  span {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
