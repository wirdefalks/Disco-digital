<template>
  <div class="grid mb-4">
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="p-10 text-center">
        <h1 class="text-5xl text-left font-extrabold">Valkommen!</h1>
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          expedita pariatur quia quos non reiciendis omnis vitae id? Pariatur,
          provident consequatur! Ducimus vero accusamus nemo, debitis facere qui
          unde rerum.
        </p>
        <ToggleAccordion />
        <div
          class="flex flex-col w-full text-left mt-5 space-y-3 text-PrimaryGreen"
        >
          <div v-for="(category, index) in categories" :key="category._id">
            <p
              class="text-PrimaryGreen py-2 cursor-pointer ml-0 showI font-bold border-t border-black"
              @click="characterItemClick(index)"
            >
              {{ category.title }}
            </p>
            <div
              :data-character-id="index"
              class="space-y-4 hidden ml-3 accordion"
            >
              <div
                v-for="subcategory in category.subcategory"
                :key="subcategory._id"
              >
                <NuxtLink :to="'/subcategory/' + subcategory.slug.current">
                  {{ subcategory.id }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <!-- show last post -->
         <!-- <SinglePost
        :post="post"
        :index="index"
        :key="post._id"
      /> -->
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import minMax from "../mixins/minMax";
// import SinglePost from '../components/SinglePost'


// call to all the posts with type == category
// on the response we get categories with titles and subcategories
// []->{} = this syntax allows to iterate through an array,
// and bring a specific property. Label in this case

const query = groq`{'categories': *[_type=="category"]{
  ..., 
  subcategory[]->{
   ...
  }
}, 'lastPost': *[_type == "post"] | order(_createdAt asc)[0]{
  ...,
  author->{name},
}}`;

export default {
  async asyncData({ $sanity }) {
    return await $sanity.fetch(query);
  },
  mixins: [ minMax ],
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