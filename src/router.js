import Vue from 'vue'
import VueRouter from 'vue-router'
import Contatos from './views/contatos/Contatos.vue'
import Home from './views/Home.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoEditar from './views/contatos/ContadoEditar'
import Erro404 from './views/Erro404'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/contatos',
            component: Contatos,
            name: 'contato',
            children: [
                {
                    path: ':id',
                    component: ContatoDetalhes
                },
                {
                  path: ':id/editar',
                  components: {
                      default: ContatoEditar,
                      'contato-detalhes': ContatoDetalhes
                  }

                },
                {
                    path: '',
                    component: ContatosHome
                }
            ]
        },
        {
            path: '/',
            component: Home
        }, {
            path: '*',
            component: Erro404
        }
    ]
});