<template lang="pug">
  div(class="footer")
    router-link(class="footer__icon", :to="{ name: 'home' }")
      span(class="material-symbols-rounded") home
    router-link(class="footer__icon", :to="{ name: 'login'}")
      span(class="material-symbols-rounded") local_mall
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent'
})
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 34px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: $border-radius-lg;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #fff;
  // border: 1px solid #f1f1f1;
  display: flex;
  flex-flow: row;
  gap: 5px;
  justify-content: space-between;
  a {
    color: $gray-400;
    position: relative;
    &:after {
      content: "";
      display: block;
      margin: 5px auto;
      width: 10px;
      height: 5px;
      border-radius: $border-radius-xmd2;
      background-image: linear-gradient(-45deg, $brown-700, $brown-100);
      transition: all 0.25s ease;
      opacity: 0;
    }
    &.router-link-active {
      color: $brown-400;
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
