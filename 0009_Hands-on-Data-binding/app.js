let app = new Vue({
  el: '#vue-app',
  data: {
    name: 'Tianxin',
    job: 'Software engineer',
    website: 'http://www.imalwayshere.com',
    websites: '<ul><li><a href="https://www.google.com">google</a></li></ul>'
  },
  methods: {
    greet: function (name) {
      return 'Hello ' + name + '!'
    }
  }
});