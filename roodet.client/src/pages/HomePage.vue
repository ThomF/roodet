<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bg-white rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        {{ post }}
      </h1>
    </div>
  </div> -->

  <div v-for="p in posts">
    <Post :post="p" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import { postsService } from '../services/PostsService';
import { Post } from '../models/Post.js';
import { AppState } from '../AppState';

export default {
  props: {
    posts: { type: Post, required: true }
  },
  setup() {
    async function getAllPosts() {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        logger.error(error)
      }
    }

    onMounted(() => {
      getAllPosts()
    })
    return {
      posts: computed(() => AppState.post)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
