<template>
  <div id="show-blogs">
    <div class="single-blog" v-for="blog in blogs" v-bind:key="blog.key">
      <h3>{{ blog.title | toUppercase }}</h3>
      <article>{{ blog.body | showSnippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      this.blogs = data.body.slice(0, 10);
    });
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
