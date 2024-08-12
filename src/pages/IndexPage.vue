<template lang="pug">
div(class="wrapper")
  div(class="news")
    router-link(:to="{ name: 'product.view', params: { id: 1 } }", class="news__image") Alpino
  div(class="products", v-if="products.length > 0")
    div(class="product", v-for="(product, index) in products", :key="`product_${index}`")
      router-link(:to="{ name: 'product.view', params: { id: product.id } }")
        img(class="product__image", :src="product.img")
      div(class="product__info")
        h5(class="h5 product__title") {{ product.title }}
        h6(class="h6 product__subtitle") {{ product.subtitle }}
        div(class="product__footer")
          h4(class="h4 product__price") {{ product.price }}
          router-link(:to="{ name: 'product.view', params: { id: product.id } }", class="btn btn--xs btn--brown product__button")
            i(class="fa-solid fa-xs fa-arrow-right")
  div(class="no-results", v-else) Nenhum resultado encontrado.
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      products: [{
        id: 1,
        img: '/img/product01.png',
        title: 'Capuccino',
        subtitle: 'com Chocolate',
        price: '11,50'
      }, {
        id: 2,
        img: '/img/product02.png',
        title: 'Cofee Latte',
        subtitle: 'com Leite',
        price: '8,50'
      }, {
        id: 3,
        img: '/img/product03.png',
        title: 'Cold Brew',
        subtitle: 'com Menta',
        price: '6,50'
      }, {
        id: 4,
        img: '/img/product04.png',
        title: 'Alpino',
        subtitle: 'com Chocolate',
        price: '15,50'
      }, {
        id: 5,
        img: '/img/product01.png',
        title: 'Capuccino',
        subtitle: 'com Chocolate',
        price: '11,50'
      }, {
        id: 6,
        img: '/img/product02.png',
        title: 'Cofee Latte',
        subtitle: 'com Leite',
        price: '8,50'
      }, {
        id: 7,
        img: '/img/product03.png',
        title: 'Cold Brew',
        subtitle: 'com Menta',
        price: '6,50'
      }, {
        id: 8,
        img: '/img/product04.png',
        title: 'Alpino',
        subtitle: 'com Chocolate',
        price: '15,50'
      }]
    }
  }
})
</script>

<style lang="scss" scoped>
  .news {
    width: 100%;
    height: 140px;
    background-color: $gray-300;
    border-radius: $border-radius;
    overflow: hidden;
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 39px 23px;
      background-image: url("/img/news01.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: $white;
      font-size: 32px;
      font-weight: 600;
      position: relative;
      text-shadow: 0px 4px 4px rgba(0,0,0,.25);
      &:before {
        content: "Novidades";
        position: absolute;
        text-shadow: initial;
        top: 13px;
        left: 23px;
        font-size: 14px;
        font-weight: 500;
        padding: 4px 6px;
        border-radius: $border-radius-xs;
        background-color: $red-500;
      }
    }
  }
  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0px;
    gap: 16px;
    min-height: 50vh;
    .product {
      padding: 5px;
      background-color: $white;
      border-radius: $border-radius;
      height: 239px;
      &__image {
        border-radius: $border-radius;
        overflow: hidden;
        background-image: url('/img/nopic02.jpg');
        background-position: center center;
        background-size: cover;
        min-width: 142px;
        min-height: 134px;
        // height: 100%;
      }
      &__info {
        padding-left: 12px;
        padding-right: 12px;
      }
      &__title {
        color: $dark;
      }
      &__subtitle {
        color: $gray-300;
      }
      &__footer {
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
      }
      &__price {
        color: $green-700;
      }
      &__button {
        i {
          line-height: initial;
        }
      }
    }
  }
  .wrapper {
    padding-top: 84px;
  }
</style>
