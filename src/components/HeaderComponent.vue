<template lang="pug">
  div(class="header")
    div
      div(class="header__welcome") Bem-vindo
      a(class="header__name", href="javascript:;")
        span(class="mr-1") Thiago Casanova
        i(class="fa-solid fa-xs fa-chevron-down text-white")
    div
      a(href="javascript:;", class="header__user")
        img(src="/img/user01.png")
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
})
</script>

<style lang="scss">
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 0;
    display: flex;
    flex-flow: row;
    gap: 10px;
    box-sizing: border-box;
    justify-content: space-between;
    background-image: linear-gradient(228deg, $brown-200, $brown-700);
    min-height: 160px;
    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 27px;
    padding-right: 27px;
    &__welcome {
      font-size: 12px;
      font-weight: 400;
      color: #b7b7b7;
    }
    &__name {
      font-size: 14px;
      font-weight: 700;
      color: #ddd;
      &:hover {
        color: $white;
      }
    }
    &__user {
      border-radius: 100%;
      overflow: hidden;
      width: 44px;
      height: 44px;
    }
  }
</style>
