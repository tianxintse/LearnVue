<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    "app-header": Header,
    "app-ninjas": Ninjas,
    "app-footer": Footer
  },
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

<style>
body {
  margin: 0;
}
</style>
