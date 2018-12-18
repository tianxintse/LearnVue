let app1 = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function () {
      return 'Hello from app 1';
    }
  }
});

let app2 = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue App Two'
  },
  methods: {
    changeTitle: function () {
      app1.title = 'Title Changed'
    }
  },
  computed: {
    greet: function () {
      return 'Hi, this is app 2 saying hello to you!';
    }
  }
});

app2.title = 'Title changed from outside';