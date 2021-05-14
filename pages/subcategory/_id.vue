<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="p-5">
        <h1 class="text-3xl text-left font-bold">{{ page.id }}</h1>
        <p class="text-left">
          {{ page.description }}
        </p>
      </div>
      <ToggleAccordion />
      <div class="border-b border-black"></div>
      <SinglePost
        v-for="(post, index) in page.posts"
        :post="post"
        :index="index"
        :subCategoryName="page.id"
        :key="post._id"
      />
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import CustomComponent from "./../../components/CustomComponent";
import ItalicComponent from "./../../components/ItalicComponent";
import GreenComponent from "./../../components/GreenComponent";

export default {
  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
        },
        marks: {
          underline: ItalicComponent,
          highlight: GreenComponent,
        },
      },
    };
  },
  async asyncData({ $sanity, route }) {
    const subcategory = await $sanity.fetch(
      groq`*[slug.current=="${route.params.id}"]{..., "posts": posts[]
      { _type == 'reference' => @->{...,author->{name}}}}`
    );
    const page = subcategory[0];
    return { page };
  },
};
</script>

<style>
.showI::before {
  content: "+";
}
.hideI::before {
  content: "-";
}
</style>
