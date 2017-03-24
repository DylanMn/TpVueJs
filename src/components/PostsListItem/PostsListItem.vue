<!-- CSS -->
<style lang="stylus" src="./PostsListItem.styl"></style>

<!-- HTML -->
<template>

  <li class="posts-list-item">
    <router-link :to="{ name: 'post_component', params: { postId: propobj.id} }">
    <img :src="propobj.screenshot_url['300px']">

      {{ propobj.name }}
      <ul v-for="maker in propobj.makers">
        <div class="posts-list-author"><li><b>{{ maker.name }}</b></li></div>
      </ul>
    <p class="product-tagline">{{ propobj.tagline }}</p>
    <p class="product-upvotes">{{ propobj.votes_count }} upvotes</p>
    </router-link>
  </li>

</template>

<!-- JS -->
<script>

  export default {
    props: ['propobj']
  }

</script>
