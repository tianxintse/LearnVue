<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First Vue File"
    };
  },
  methods: {
    greeting() {
      return "heeey cowboy";
    }
  }
};
</script>

<style>
</style>
