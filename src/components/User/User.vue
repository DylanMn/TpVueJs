<template lang="html">

<div v-if="maker">
  <p class="posts-author-name">{{maker.name}}</p>
  <img :src="maker.image_url['132px']" class="posts-author-img">

<h3>Projets :</h3>

<ul class="posts-list-project">
  <li v-for="post in maker.maker_of">
    <p class="posts-list-name">{{ post.name }}</p>
    <img :src="post.thumbnail.image_url" class="posts-list-img">
  </li>
</ul>

</div>
</template>





<script>
import axios from 'axios'
import _ from 'lodash'
import PostsListItem from '../PostsListItem/PostsListItem.vue'
export default {

  components: {
              'posts-list-item': PostsListItem
          },

  data() {
    return {
      maker: null,
    }
  },

  created() {

            this.getMaker(this.$route.params.makerId)
        },
        methods: {

            getMaker(makerId) {

                axios.get('/v1/users/' + makerId)
                    .then((response) => {
                        console.log(response.data.user)
                        this.maker = response.data.user
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        }
}
</script>


<style lang="stylus" src="./User.styl"></style>
</style>
