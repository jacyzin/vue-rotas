<template>
    <div>
        <h3 class="font-weight-light">Contatos</h3>
        <ul class="list-group" v-if="contatos.length > 0">
            <ContatosListaItem
            class="list-group-item"
            v-for="contato in contatos"
            :key="contato.id"
            :contato="contato" />
        </ul>
        <p v-else>Nenhum contato cadastrado.</p>
        <button class="btn btn-secondary mt-4 mb-4" @click="voltar">Voltar</button>
    </div>
</template>
<script>
    import ContatosListaItem from './ContatosListaItem'

    export default {
        components: {
          ContatosListaItem
        },
        data() {
            return {
                contatos: [
                    { id: 1, nome: 'Issac Newton', email: 'newton@gmail.com' },
                    { id: 2, nome: 'Albert Einstein', email: 'newton@gmail.com' },
                    { id: 3, nome: 'Stephen Hawking', email: 'hawking@gmail.com' }
                ]
            }
        },
        methods: {
            voltar(event) {
                this.$router.back()
            }
        }
    }
</script>