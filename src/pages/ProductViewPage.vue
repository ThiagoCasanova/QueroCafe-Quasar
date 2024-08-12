<template lang="pug">
div(class="product")
  div(class="news")
    div(class="news__image")
  div(class="product__info")
    div(class="product__titles")
      h4(class="h4 product__title") Capuccino
      h6(class="h6 product__subtitle") com Chocolate
    div(class="product__nutri")
      div(class="nutri")
        img(src="/img/bean.png")
      div(class="nutri")
        img(src="/img/milk.png")
  hr(class="hr")
  h5(class="h5 mb-2") Descrição
  div(class="lead readmore mb-2")
    div(class="readmore__wrap")
      input(type="checkbox", class="readmore__state", id="readmore__state")
      span(class="readmore__summary") Um cappuccino é uma bebida de aproximadamente, sendo 10% de café expresso e 32% de leite de fresco e 56% de café, utilizamos grãos especiais
      span(class="readmore__target") Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero fuga facilis vel consectetur quos sapiente deleniti eveniet dolores tempore eos deserunt officia quis ab? Excepturi vero tempore minus beatae voluptatem.
      label(class="readmore__trigger", for="readmore__state")
  h5(class="h5 mb-2") Tamanhos disponíveis
  div(class="sizes")
    div(class="size", :class="{ active: !index }" v-for="(size, index) in sizes") {{ size.title }}
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductViewPage',
  data () {
    return {
      sizes: [{
        title: 'P',
        value: 'p'
      }, {
        title: 'M',
        value: 'm'
      }, {
        title: 'G',
        value: 'g'
      }]
    }
  },
  methods: {
    readmore() {
      console.log('ler mais...')
    }
  }
})
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    height: 226px;
    background-color: $gray-300;
    border-radius: $border-radius;
    overflow: hidden;
    margin-bottom: 20px;
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 113px 0px;
      background-image: url("/img/view01.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
  }
  .sizes {
    display: flex;
    flex-flow: row;
    gap: 12px;
    .size {
      flex: 1;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 400;
      background-color: #fff5ee;
      border: 1px solid $brown-400;
      border-radius: $border-radius-md;
      color: $brown-400;
      padding: 10px 10px;
      &:hover, &.active {
        color: #2f2d2c;
        border-color: #dedede;
        background-color: $white;
      }
    }
  }
  .product {
    &__info {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      gap: 10px;
    }
    &__titles {
      display: flex;
      flex-flow: column;
      gap: 10px;
    }
    &__title {
      color: $dark;
    }
    &__subtitle {
      color: $gray-300;
    }
    &__nutri {
      display: flex;
      flex-flow: row;
      gap: 12px;
      .nutri {
        width: 44px;
        height: 44px;
        overflow: hidden;
        border-radius: $border-radius-xmd;
        background-color: #f2f2f2;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
