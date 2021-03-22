<template>
  <div>
    <div class="grid place-items-center  h-screen">

    <h1 class=" text-5xl text-center font-bold  ">{{ page.text }}</h1>
    </div>
   
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="about"]{
  text,
  "mainImage": mainImage.asset->url,
}|order(_createdAt desc)[0]`

export default {
  async asyncData({ $sanity }) {
    return { page: await $sanity.fetch(query) }
  },
  methods: {},
}
</script>

<style>
</style>