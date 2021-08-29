<template>


   <div >
   <div class="flex flex-col justify-start mb-12 border-2 border-green-300 bg-ContainerGray ">
      <div class="p-20">

    <h1 class="text-5xl font-bold text-center border-b border-PrimaryGreen">{{ page.name }}</h1>
    <SanityContent :blocks="page.body" class="py-6" />
    </div>
  </div>
  </div>
  
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";

import { groq } from "@nuxtjs/sanity";
import CustomComponent from "../../components/CustomComponent";
import ItalicComponent from "../../components/ItalicComponent";
import GreenComponent from "../../components/GreenComponent";
import RenderVideo from "../../components/RenderVideo";
import HtmlComponent from "../../components/HtmlComponent";

export default {
  components: { SanityBlocks },

  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
          video: RenderVideo,
          html: HtmlComponent,
        },
        marks: {
          underline: ItalicComponent,
          highlight: GreenComponent,
        },
      },
    };
  },
  async asyncData({ $sanity, route }) {
    return {page : await $sanity.fetch(
      groq`*[slug.current=="${route.params.id}"][0]`
    )}
    
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