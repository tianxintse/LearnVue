<template>
  <div id="show-blogs">
    <h1>All Articles</h1>
    <input v-model="search" id="search-bar" type="text" placeholder="what are you looking for?">
    <div v-for="blog in filteredBlogs" v-bind:key="blog.key" class="single-blog">
      <h3 v-rainbow>{{ blog.title | toUppercase }}</h3>
      <article>{{ blog.body | showSnippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
    showSnippet(value) {
      return value.slice(0, 256) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  },
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
#search-bar {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.single-blog {
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
