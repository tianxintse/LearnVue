let app = new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.age + this.a;
    },
    addToB: function () {
      console.log('addToB');
      return this.age + this.b;
    }
  }
});