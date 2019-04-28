<template>
  <div id="app">

    <div class="jumbotron">
      <h1 class="display-4">Vue Router</h1>
      <p class="lead">Adicionando rotas a Single Page Applications no Vue.</p>
    </div>

    <div class="container">
      <router-link
              to="/"
              class="btn btn-info mb-4 mr-2"
              exact-active-class="active"
      >Home
      </router-link>
      <router-link
              :to="{ path: '/contatos' }"
              class="btn btn-info mb-4 mr-2"
              exact-active-class="active"
     >Contatos
      </router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
