let app = new Vue({
  el: '#vue-app',
  data: {
    avaliable: false,
    nearby: false
  },
  computed: {
    computedClasses: function () {
      return {
        avaliable: this.avaliable,
        nearby: this.nearby
      }
    }
  }
});