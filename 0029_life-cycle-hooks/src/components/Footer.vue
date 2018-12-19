<template>
  <footer>
    <p>Copyright 2018 {{ title }}</p>
  </footer>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {
    bus.$on("titleChanged", data => {
      this.title = data;
    });
  }
};
</script>

<style scoped>
footer {
  background: #333;
  padding: 10px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
