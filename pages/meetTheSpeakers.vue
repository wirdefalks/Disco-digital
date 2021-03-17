<template>
  <div>
    <div class="grid place-items-center h-screen">
      <h1 class="text-5xl text-center font-bold">{{ page.header }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
         <div v-for="speaker in page.speakers" :key="speaker.name">
        <img
          class="w-80 rounded-full h-80"
          :src="speaker.image"
          alt="speaker.name"
        />
        <h4 class="text-3xl font-bold text-center">{{ speaker.name }}</h4>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="meetTheSpeakers"][0]{
  header, speakers[] {
    "image": image.asset->url,
    ...
  },
  "mainImage": mainImage.asset->url,
}`

export default {
  async asyncData({ $sanity }) {
    return { page: await $sanity.fetch(query) }
  },
  methods: {},
}
</script>

<style>
</style>