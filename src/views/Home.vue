<template>
  <div class="home">
    <BlogPost :post='welcomeScreen'/>
    <BlogPost :post="post" v-for='(post, index) in sampleBlogPost' :key="index"/>
    <div class="blog-card-wrap">
      <div class="containter">
        <h3>View more recent blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for='(post, index) in sampleBlogCards' :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post, Register for a free account today!</h2>
        <router-link class="router-button" to="#">
            Register for FireBlogs <Arrow class='arrow arrow-light'/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
        "This is a simple blog where i will share my thoughts and learnings about vuejs with firebase. I hope you enjoy my blog!",
        welcomeScreen: true,
        photo: 'coding',
      },
      sampleBlogPost: [
        {
          title: 'Sample Blog Post',
          blogHTML: 'filler for title',
          blogCoverPhoto: 'beautiful-stories',
        },
        {
          title: 'Second post!',
          blogHTML: 'Another filler',
          blogCoverPhoto: 'designed-for-everyone',
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
};
</script>

<style lang="scss" scoped>
  .blog-card-wrap {
    h3 {
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .updates {
    .container {
      padding: 100px 25px;
      display:flex;
      flex-direction: column;
      align-items: center;
      @media(min-width: 800px) {
        padding: 125px;
        flex-direction: row;
      }

      .router-button {
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media(min-width: 800px) {
          margin-left: auto;

        }
      }
      h2 {
        font-weight: 300;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        @media(min-width: 800px) {
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }


</style>
