<template lang="pug">
  div(class="footer")
    div(class="footer__value") Valor
    div(class="footer__price") R$ 11,50
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterViewComponent'
})
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 999;
  padding: 38px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: $border-radius-lg;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #fff;
  // border: 1px solid #f1f1f1;
  display: flex;
  flex-flow: column;
  gap: 5px;
  justify-content: space-between;
  &__value {
    color: $gray-300;
    font-size: 14px;
    font-weight: 400;
  }
  &__price {
    color: $brown-400;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
