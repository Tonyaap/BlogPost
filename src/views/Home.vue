<template>
  <div class="home">
    <BlogPost :post='welcomeScreen'/>
    <BlogPost :post="post" v-for='(post, index) in sampleBlogPost' :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
export default {
  name: "Home",
  components: { BlogPost },
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
  }
};
</script>
