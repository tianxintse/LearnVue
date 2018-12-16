let app = new Vue({
  el: '#vue-app',
  data: {
    name: 'Tianxin',
    job: 'Software engineer'
  },
  methods: {
    greet: function (name) {
      return 'Hello ' + name + '!'
    }
  }
});