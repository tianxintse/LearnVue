<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" v-bind:key="ninja.key">
        <h3>{{ ninja.name }}</h3>
        <p v-if="ninja.show">{{ ninja.speciality }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: [
        { name: "Yoshi", speciality: "JavaScript", show: false },
        { name: "Dyu", speciality: "C++", show: false },
        { name: "Tianxin", speciality: "Python", show: false },
        { name: "Bobo", speciality: "Golang", show: false },
        { name: "Mate", speciality: "Math", show: false },
        { name: "Yueyue", speciality: "English", show: false }
      ]
    };
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
