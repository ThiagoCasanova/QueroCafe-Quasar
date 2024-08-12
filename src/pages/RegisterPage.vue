<template lang="pug">
div(class="register", @submit.prevent="onSubmit")
  form(class="form")
    h3(class="form__title") Cadastro
    div(class="form__group")
      label(for="username", class="form__label") Usuário
      input(id="username", type="text", class="form__field")
    div(class="form__group")
      label(for="password", class="form__label") Senha
      input(id="password", type="password", class="form__field")
    div(class="form__group")
      label(for="password_confirmation", class="form__label") Repita a senha
      input(id="password_confirmation", type="password", class="form__field")
    div(class="form__group form__group--lg")
      label(for="email", class="form__label") E-mail
      input(id="email", type="email", class="form__field")
    div(class="form__group")
      button(class="btn btn--brown btn--lg btn--block") Entrar
    div(class="form__group")
      span(class="form__info") Já possuo uma conta. &nbsp;
      router-link(class="form__link", :to="{ name: 'login' }") Acessar
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterPage',
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
  .register {
    flex: 1;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
    padding-top: 39px;
    background-color: $black;
  }
</style>
