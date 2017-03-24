<style lang="stylus" src="./Post.styl"></style>

<template lang="html">
<div>
  <ul>
  <li><a href="/">HomePage</a></li>
  </ul>
  <ul>
    <div class="posts-item">
      <h3 class="product-title">{{ posts.name }}</h3>
      <li><img :src="posts.screenshot_url['300px']"></li>
      <ul v-for="maker in posts.makers">
        <div class="posts-list-author"><li><b> {{maker.name }}</b></li></div>
      </ul>
      <ul v-for="maker in posts.makers">
        <div class="posts-list-author"><li><b>{{ maker.day }}</b></li></div>
      </ul>
      <p class="product-tagline">{{ posts.tagline }}</p>
      <p class="product-upvotes">{{ posts.votes_count }} upvotes</p>
    </div>
  </ul>

  <ul v-for="comment in posts.comments">
    <div class="posts-list-comment"><li><b> {{comment.user.name }} </b> : {{ comment.body }}</li></div>
  </ul>

</div>
</template>

<script>

import axios from 'axios'
export default {

  created() {

    this.getPosts(this.$route.params.postId)

  },

  data() {
    return {
      posts: null,
    }
  },

  methods: {

    getPosts(postId) {
      axios.get('/v1/posts/' + postId)
        .then((response) =>{
          console.log(response);
          this.posts = response.data.post;
          console.log(response.data.post.comments[0].body.length)

        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
}
</script>

<style lang="css">
</style>
