<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="p-5">
        <h1 class="text-3xl text-left font-bold">{{ page.label }}</h1>
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
          provident obcaecati aliquam optio excepturi sint beatae quod ex,
          ullam, aspernatur tenetur explicabo. Excepturi voluptatum voluptas
          quam ut sequi. Accusantium, ratione!
        </p>
      </div>
      <div class="text-right">
        <button class="m-3 px-5 rounded-md bg-PrimaryGreen">
          - minificare alla
        </button>
        <button class="m-3 px-5 rounded-md bg-PrimaryGreen">
          + expande alla
        </button>
      </div>
      <div class="border-b border-black"></div>
      <div
        v-for="(post, index) in page.post"
        :key="post.title"
        class="border-b border-black"
      >
        <p
          class="text-PrimaryGreen p-6 cursor-pointer ml-0 font-bold border-black"
          @click="characterItemClick(index)"
        >
          + {{ post.title }}
        </p>
        <div
          :data-character-id="index"
          class="bg-gray-100 p-10 space-y-4 hidden"
        >
          <h1 class="text-4xl text-left font-extrabold accordion">
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
import CustomComponent from "../../components/CustomComponent"

export default {
  layout: "subcategory",
  data() {
    return {
      serializers:{
        types: {
          image:CustomComponent
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
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelector(
        '[data-character-id="' + characterIndex + '"]'
      );
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.remove("block");
        characterInfoElement.classList.add("hidden");
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
      }
    }, returnDate: (a) => new Date(a).toLocaleString("en-EN")
  }
};
</script>

<style></style>
