<template>
  <div>
   <div class="flex flex-col justify-start bg-ContainerGray min-h-full">
      <div class="p-5">
     
    <h1 class=" text-5xl text-center font-bold  ">{{ page.title }}</h1>
    <SanityContent :blocks="page.aboutInfo" />
    </div>
  </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="omoss"][0]`

export default {
  async asyncData({ $sanity }) {
    return { page: await $sanity.fetch(query) }
  },
  methods: {},
}
</script>

<style>
</style>