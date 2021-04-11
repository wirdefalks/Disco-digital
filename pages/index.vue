<template>
  <div class="grid h-screen place-items-center grid-cols-1 ">
    <div class="  w-10/12 lg:w-1/2 text-center shadow p-10">

    <h1 class=" text-5xl text-center font-bold  ">{{ page.text }}</h1>
    <img :src="page.logo" class="w-20 mx-auto my-4" alt="">
    <SanityContent
      class="max-w-2xl space-y-2 text-base text-left"
      :blocks="page.about"
      
    />
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
// import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'
  // import the styles

const query = groq`*[_type=="home"][1]{
  text,about,
  "logo": logo.asset->url,
}`

export default {
    // components: { SanityContent },

  async asyncData({ $sanity }) {
    return { page: await $sanity.fetch(query) }
  },
  
  methods: {
    logAlgo(){
      console.log("algo");
    }
  }
}
</script>

<style>
</style>