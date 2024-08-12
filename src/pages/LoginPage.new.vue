<template lang="pug">
div(class="access")
  div(class="splash")
    div(class="splash__text") Aproveite seus melhores momentos com um #[span café].
  div(class="login")
    form(class="form", @submit.prevent="onSubmit")
      h3(class="form__title") Login
      div(class="form__group")
        label(for="username", class="form__label") Usuário
        input(id="username", type="text", class="form__field")
      div(class="form__group form__group--lg")
        label(for="password", class="form__label") Senha
        input(id="password", type="password", class="form__field")
      div(class="form__group")
        button(class="btn btn--brown btn--lg btn--block") Entrar
      div(class="form__group")
        span(class="form__info") Ainda não possui uma conta? &nbsp;
        a(class="form__link", href="javascript:;", @click="showRegister") Cadastre-se
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data () {
    return {
    }
  },
  methods: {
    onSubmit () {
      const vm = this
      vm.$router.push({ name: 'home' })
    }
  }
})
</script>

<style lang="scss" scoped>
.splash {
  flex: 1;
  background-image: url("/img/splash01.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  &__text {
    position: fixed;
    height: 50%;
    width: 100%;
    bottom: 0;
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
.access {
  display: flex;
  flex-flow: column;
  flex: 1;
  .login {
    background-image: url("/img/header01.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    position: relative;
    .form {
      padding-top: 200px;
      position: fixed;
      width: 100%;
      height: 90%;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-image: linear-gradient(0deg, #000 80%, #0000 100%);
    }
  }
}
</style>
