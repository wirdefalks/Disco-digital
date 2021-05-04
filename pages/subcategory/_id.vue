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
      <div
        v-for="(post, index) in page.post"
        :key="post.title"
        class="border-b border-black"
      >
        <p
          class="text-PrimaryGreen p-6 cursor-pointer ml-0 font-bold border-black showI"
          @click="characterItemClick(index)"
        >
          {{ post.title }}
        </p>
        <div
          :data-character-id="index"
          class="bg-gray-100 p-10 space-y-4 hidden accordion"
        >
          <h1 class="text-4xl text-left font-extrabold">
            {{ post.title }}
          </h1>
          <p class="text-gray-500">
            {{ returnDate(post.publishedAt) }} av {{ post.author.name }}
          </p>
          <div class="text-right">
            <button class="m-3 px-5 rounded-md bg-PrimaryGreen">Skry ut</button>
          </div>
          <SanityContent
            class="space-y-2 text-base text-left"
            :blocks="post.body"
            :serializers="serializers"
          />
          <div class="flex text-PrimaryGreen">
            <h4 v-for="(tag, i) in post.tags" :key="i">
              {{ tag.label }}
              <span class="text-black"> | </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import CustomComponent from "./../../components/CustomComponent";
import ItalicComponent from "./../../components/ItalicComponent";
import GreenComponent from "./../../components/GreenComponent";
import minMax from "../../mixins/minMax";
export default {
  layout: "subcategory",
  mixins: [minMax],
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
    const subcategory = await $sanity.fetch(groq`*[slug.current=="${route.params.id}"]{
  ...,
  "post": *[_type=='post' && references(^._id)]{ 
  	...,
    author->{name},
	}
}`);
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
