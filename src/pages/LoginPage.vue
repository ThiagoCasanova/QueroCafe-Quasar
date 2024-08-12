<template lang="pug">
div(class="login")
  form(class="form", @submit.prevent="onSubmit")
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
      router-link(class="form__link", :to="{ name: 'register' }") Cadastre-se
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
    },
  }
})
</script>

<style lang="scss" scoped>
  .login {
    flex: 1;
    position: relative;
    .form {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 100%;
      padding-top: 255px;
      background-image: linear-gradient(0deg, $black 72%, #0000 100%), url("/img/header01.png");
      z-index: 1;
    }
  }
</style>
