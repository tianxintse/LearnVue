<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" v-bind:key="ninja.key">
        <h3>{{ ninja.name }}</h3>
        <p v-if="ninja.show">{{ ninja.speciality }}</p>
      </li>
    </ul>
    <button v-on:click="removeNinja">Remove Ninja</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    removeNinja() {
      this.ninjas.pop();
    }
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
