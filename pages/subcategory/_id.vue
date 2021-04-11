<template>
  <div>
   <div
    class="grid  h-screen place-items-center"
  >
    <h1 class="text-5xl text-center font-bold">{{ page.header }}</h1>
   <div v-for="post in page.post" :key="post.title">
          <li class="mr-3">
            <NuxtLink
              class="inline-block no-underline transition-all duration-200 hover:text-blue-800 py-2 px-4"
              :to="'/post/' + post.title"
              >{{ post.title }}</NuxtLink
            >
          </li>
           
    </div>
  </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";


const query = groq`*[id=="SUB-1-TWO"]{
  id,
  "post": *[_type=='post' && references(^._id)]{ 
  	title,
  	slug,
  	releaseDate
	}
}`;

export default {
  data() {
    return {
      
    };
  },
  async asyncData({ $sanity, route }) {
    const subcategory = await $sanity.fetch(groq`*[id=="${route.params.id}"]{
  id,
  "post": *[_type=='post' && references(^._id)]{ 
  	title,
  	slug,
  	releaseDate
	}
}`)
   const page = subcategory[0]
    return { page };
  },
  methods: {
      cosa(){
          this.contenido = "asdñkñ" + Date.now()
      }
  },
};
</script>

<style>
</style>