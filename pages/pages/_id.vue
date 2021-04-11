<template>
  <div class="grid h-screen place-items-center grid-cols-1">
    <h1 class="text-5xl text-center font-bold">{{ page.header }}</h1>

    <div
      v-for="content in page.contentPosts"
      :key="content.header"
      :style="{ backgroundColor: content.color }"
    >
      <SanityContent
        class="max-w-2xl space-y-2 text-base text-left"
        :blocks="content.body"
        
      />
    </div>
  </div>
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";

import { groq } from "@nuxtjs/sanity";
import CustomComponent from "./../../components/CustomComponent";

const query = groq`*[_type=="xtraPage"]`;

    
export default {
  components: { SanityBlocks },

  data() {
    return {
      filx: null,
      contenido: "contenidio",
      serializers: {
        types: {
         image:CustomComponent
        },
      },
    };
  },
  async asyncData({ $sanity, route }) {
    const xtras = await $sanity.fetch(query);
    let filx = xtras.filter((x) => x.name == route.params.id);
    const page = filx[0];
    return { page };
  },
  methods: {
    cosa() {
      this.contenido = "asdñkñ" + Date.now();
    },
  },
};
</script>

<style>
</style>