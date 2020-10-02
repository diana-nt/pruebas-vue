<template>
  <div class="about">
    <h1>Posts publicados</h1>
    <Posts/>
  </div>
</template>

<script>
  import Posts from '../components/Posts'
  export default {
    name: 'PostsVue',
    components: {
      Posts
    }
  }
</script>
