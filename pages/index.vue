<template>
  <div>
    <div class="grid mb-4 shadow">
      <div class="flex flex-col justify-start bg-ContainerGray">
        <div class="p-10 text-center">
          <h1 class="text-5xl font-extrabold text-left">Välkommen!</h1>

          <SanityContent class="text-left" :blocks="home.about" />
          <ToggleAccordion />
          <div
            class="flex flex-col w-full mt-5 space-y-3 text-left text-PrimaryGreen"
          >
            <div v-for="(category, index) in categories" :key="category._id">
              <p
                class="py-3 pt-4 ml-0 text-lg tracking-wide border-t border-gray-600 cursor-pointer text-PrimaryGreen showI"
                @click="characterItemClick(index)"
              >
                {{ category.title }}
              </p>
              <div
                :data-character-id="index"
                class="hidden ml-3 space-y-1 accordion"
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
    </div>
    <!-- show last post -->
    <SinglePost
      class="mb-12 shadow"
      :post="lastPost"
      :index="ind"
      :isLast="true"
      :catName="lastPost.category.title"
      :subCatDesc="lastPost.subcategory[0].description"
      :catDesc="lastPost.category.description"
      :subCategoryName="lastPost.subcategory[0].id"
    />
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import minMax from "../mixins/minMax";

// call to all the posts with type == category
// on the response we get categories with titles and subcategories
// []->{} = this syntax allows to iterate through an array,
// and bring a specific property. Label in this case

const query = groq`{ 'home': *[_type == 'home'][0]{...},'categories': *[_type=="category"]| order(title asc){
  ...,
  subcategory[]->{
   ...
  }
}, 'lastPost': *[_type == "post"] | order(_createdAt desc)[0]{
  ...,
  "tags": tags[].label,
  author->{name},
 "subcategory": *[_type=='subcategory' && references(^._id)]{...,"title":id,description}
} {
  ...,
  'category': *[_type == 'category' && references(^.subcategory[]._id)][0]{title,description}
},
}`;

export default {
  async asyncData({ $sanity }) {
    return await $sanity.fetch(query);
  },
  data() {
    return {
      ind: "a",
    };
  },
  mixins: [minMax],
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
