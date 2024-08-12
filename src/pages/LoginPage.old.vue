<template lang="pug">
div(class="login")
  form(class="form", :class="{ 'form--register': is_register, 'form--login': !is_register }", @submit.prevent="onSubmit", autocomplete="off")
    transition(name="fade")
      h3(class="form__title", v-if="is_register") Cadastro
      h3(class="form__title", v-else) Login
    div(class="fields")
      div(class="login-fields")
        div(class="form__group")
          label(for="username", class="form__label") Usuário
          input(id="username", type="text", class="form__field")
        div(class="form__group")
          label(for="password", class="form__label") Senha
          input(id="password", type="password", class="form__field")
      div(class="register-fields")
        div(class="form__group")
          label(for="password_confirmation", class="form__label") Repita a senha
          input(id="password_confirmation", type="password", class="form__field")
        div(class="form__group")
          label(for="email", class="form__label") E-mail
          input(id="email", type="email", class="form__field")
      div(class="form__group mt-2")
        button(class="btn btn--brown btn--lg btn--block") Entrar
      transition(name="fade")
        div(class="form__group", v-if="is_register")
          span(class="form__info") Já possuo uma conta. &nbsp;
          a(class="form__link", href="javascript:;", @click="is_register = false") Acessar
        div(class="form__group", v-else)
          span(class="form__info") Ainda não possui uma conta? &nbsp;
          a(class="form__link", href="javascript:;", @click="is_register = true") Cadastre-se
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
    background-image: url("/img/header01.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    position: relative;
    .form {
      position: fixed;
      z-index: 1;
      width: 100%;
      left: 0;
      bottom: 0;
      height: 100%;
      transition: all 0.5s ease;
      display: flex;
      flex-flow: column;
      justify-content: center;
      // padding-top: 200px;
      &__title {
      }
      .fields {
        position: relative;
      }
      .show-in-register,
      .show-in-login {
        height: 0;
        opacity: 1;
        transition: height 0.35s 0.1s ease-in-out, opacity 0.35s 0.1s ease-in-out;
      }
      // .login-fields {
      //   position: relative;
      //   z-index: 1;
      // }
      // .register-fields {
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   width: 100%;
      //   z-index: 0;
      //   opacity: 1;
      //   transition: opacity .3s ease;
      // }
      &--login {
        // padding-top: 200px;
        background-image: linear-gradient(0deg, $black 80%, #0000 100%);
        .show-in-register {
          opacity: 0;
          height: 0;
        }
        .show-in-login {
          opacity: 1;
          height: initial;
        }
      }
      &--register {
        background-image: linear-gradient(0deg, $black 0%, $black 100%);
        .show-in-register {
          opacity: 1;
          height: initial;
        }
        .show-in-login {
          opacity: 0;
          height: 0;
          display: none;
        }
        // .login-fields {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   opacity: 1;
        // }
        // .register-fields {
        //   opacity: 1;
        // }
      }
    }
  }
</style>
