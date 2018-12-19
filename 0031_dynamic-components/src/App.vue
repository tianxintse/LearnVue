<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="showFormOne">Show form one</button>
    <button v-on:click="showFormTwo">Show form two</button>
  </div>
</template>

<script>
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  data() {
    return {
      component: formOne
    };
  },
  methods: {
    showFormOne() {
      this.component = formOne;
    },
    showFormTwo() {
      this.component = formTwo;
    }
  }
};
</script>