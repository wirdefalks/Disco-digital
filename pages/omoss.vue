<template>
  <div >
   <div class="flex flex-col justify-start mb-12 bg-ContainerGray ">
      <div class="p-20">

    <h1 class="text-5xl font-bold text-center border-b border-PrimaryGreen">{{ page.title }}</h1>
    <SanityContent :blocks="page.aboutInfo" class="py-6" />
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
