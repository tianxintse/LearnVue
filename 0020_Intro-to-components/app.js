Vue.component('gretting', {
  template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Mario';
    }
  }
});

let app1 = new Vue({
  el: '#vue-app-one'
});

let app2 = new Vue({
  el: '#vue-app-two'
});