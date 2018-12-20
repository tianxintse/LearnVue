<template>
  <div>
    <show-blogs></show-blogs>
    <list-blog-titles></list-blog-titles>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogTitles from "./components/listBlogTitles";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-blog-titles": listBlogTitles
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
