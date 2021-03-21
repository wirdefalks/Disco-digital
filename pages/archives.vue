<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <img :src="page.mainImage" class="w-50 m-auto" alt="" />
    <SanityContent
      class="max-w-2xl space-y-2 text-base text-left"
      :blocks="page.body"
    />
    <h1 :style="{ color: page.color }">hola</h1>
    <h1>{{ page.publishedAt }}</h1>
    <a :href="page.mainImage + '?dl=asd.jpg'">Download</a>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="post"][0]{
  title, slug, body, color,publishedAt,
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