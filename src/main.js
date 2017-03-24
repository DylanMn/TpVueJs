// On importe Vue
import Vue from 'vue'

// On importe axios
import axios from 'axios'
// On importe le router
import VueRouter from 'vue-router'

// On importe les composants vue
import Home from './components/Home/Home.vue'
import App from './components/app.vue'
import Post from './components/Post/Post.vue'
import Maker from './components/User/User.vue'

Vue.use(VueRouter) // On utilise vue router

const routes = [
                {
                 path: '/',
                 component: Home,
                 name: 'home_component',
               },
                {
                 path: '/posts/:postId',
                 component: Post,
                 name: 'post_component'
               },
                {
                 path: '/user/:makerId',
                 component: Maker,
                 name: 'maker_component'
                }
              ]

const router = new VueRouter({
  routes
})



// On configure axios
window.token = 'd0f716f29b782ecf3e4f680fb09b23b03ae127cb70f36279df67bc8bd0f73865';
axios.defaults.baseURL = 'https://api.producthunt.com';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


// On initialise l'application
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
