<template>
  <div>
    <h1 class="text-red-500">Welcome to your project!!!</h1>
    {{ posts }}
  </div>
</template>

<script>
import { HTTP } from "./config/axios";

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    HTTP.get("posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss"></style>
