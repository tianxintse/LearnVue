export default {
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
  }
}
