<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato com id: {{ $route.params.id }}</h3>
        <router-link
                :to="`/contatos/${id}/editar`"
                class="btn btn-primary">
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
          return {
              id: this.$route.params.id
          }
        },
      /*  watch: {
          '$route'(to, from) {
              this.id = to.params.id
          }
        },*/
      beforeRouteUpdate(to, from , next) {
          this.id = to.params.id;
          next()
      },
        created() {
            console.log('Parâmetros da rota:', this.$route.params);
        }
    }
</script>