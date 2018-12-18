let app = new Vue({
  el: '#vue-app',
  data: {
    fav: ''
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.hello.innerText);
      this.fav = this.$refs.fav.value;
    }
  }
});