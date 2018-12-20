import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'

Vue.use(VueResourse);

Vue.filter('toUppercase', value => {
  return value.toUpperCase();
});

Vue.filter('showSnippet', value => {
  return value.slice(0, 255) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
