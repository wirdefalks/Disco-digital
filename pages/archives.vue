<template>
  <div v-if="page" :style="{backgroundColor: page.color}" class=' h-screen pt-16'>
    <h1>{{ page.title }}</h1>
    <img :src="page.logo" class="w-50 m-auto" alt="" />
    <SanityContent
      class="max-w-2xl space-y-2 text-base text-left"
      :blocks="page.about"
    />
    <h1 :style="{ color: page.color }">hola</h1>
    <h1>{{ page.publishedAt }}</h1>
    <a :href="page.logo + '?dl=asd.jpg'">Download</a>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="archives"][0]{
  text, about, color,
  "logo": logo.asset->url
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