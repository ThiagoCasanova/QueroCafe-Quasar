<template lang="pug">
div(class="login")
  form(class="form form--login", :class="{ 'fade': is_register }", @submit.prevent="onSubmit")
    h3(class="form__title") Login
    div(class="form__group")
      label(for="username", class="form__label") Usuário
      input(id="username", type="text", class="form__field", required)
    div(class="form__group")
      label(for="password", class="form__label") Senha
      input(id="password", type="password", class="form__field", required)
    div(class="form__group mt-2")
      button(class="btn btn--brown btn--lg btn--block") Entrar
    div(class="form__group")
      span(class="form__info") Ainda não possui uma conta? &nbsp;
      a(class="form__link", href="javascript:;", @click="is_register = true") Cadastre-se
  form(class="form form--register", @submit.prevent="onSubmit")
    h3(class="form__title") Cadastro
    div(class="form__group")
      label(for="username", class="form__label") Usuário
      input(id="username", type="text", class="form__field", required)
    div(class="form__group")
      label(for="password", class="form__label") Senha
      input(id="password", type="password", class="form__field", required)
    div(class="form__group")
      label(for="password_confirmation", class="form__label") Repita a senha
      input(id="password_confirmation", type="password", class="form__field", required)
    div(class="form__group")
      label(for="email", class="form__label") E-mail
      input(id="email", type="email", class="form__field", required)
    div(class="form__group mt-2")
      button(class="btn btn--brown btn--lg btn--block") Entrar
    div(class="form__group")
      span(class="form__info") Já possuo uma conta. &nbsp;
      a(class="form__link", href="javascript:;", @click="is_register = false") Acessar
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data () {
    return {
      is_register: false,
    }
  },
  methods: {
    onSubmit () {
      const vm = this
      vm.$router.push({ name: 'home' })
    },
  }
})
</script>

<style lang="scss">
  .login {
    flex: 1;
    position: relative;
    .form {
      position: fixed;
      z-index: 1;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 100%;
      // transition: all 0.5s ease;
      &--login {
        padding-top: 255px;
        background-image: linear-gradient(0deg, $black 72%, #0000 100%), url("/img/header01.png");
        z-index: 1;
      }
      &--register {
        padding-top: 52px;
        background-image: linear-gradient(0deg, $black 0%, $black 100%);
        z-index: 0;
      }
    }
  }
</style>
