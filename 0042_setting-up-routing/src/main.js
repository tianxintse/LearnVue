import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// Use packages
Vue.use(VueResourse);
Vue.use(VueRouter);

// Register routes
const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
