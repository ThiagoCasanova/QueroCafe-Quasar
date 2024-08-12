<template lang="pug">
div(class="splash")
  div(class="splash__text") Aproveite seus melhores momentos com um #[span café].
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SplashPage',
  data () {
    return {
      timer: null,
      interval: 5*1e3,
    }
  },
  mounted () {
    const vm = this
    vm.timer = setTimeout(() => {
      vm.$router.push({ name: 'login' })
    }, vm.interval)
  },
  destroyed () {
    const vm = this
    clearTimeout(vm.timer)
  }
})
</script>

<style lang="scss">
.splash {
  flex: 1;
  background-color: $pink;
  background-image: url("/img/splash01.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  position: relative;
  &__text {
    position: fixed;
    height: 50%;
    width: 100%;
    bottom: 0;
    background-color: #0000;
    background-image: linear-gradient(0deg, #000 80%, #0000 100%);
    color: $white;
    font-size: 32px;
    text-align: center;
    padding-top: 120px;
    padding-left: 27px;
    padding-right: 27px;
    line-height: 1.2;
    font-weight: 600;
    span {
      display: inline;
      color: $brown-300;
    }
  }
}
</style>
