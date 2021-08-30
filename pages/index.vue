<template>
  <div>
    <div class="grid mb-4 shadow">
      <div class="flex flex-col justify-start bg-ContainerGray">
        <div class="p-10 text-center">
          <div>
            <!-- <span class="pageTitle"></span> -->
            <h1 class="text-5xl font-extrabold text-left headerPage satDown">{{ home.text }}</h1>
          </div>

          <SanityContent class="text-left text-gray-800" :blocks="home.about" />
          <ToggleAccordion />
          <div
            class="flex flex-col w-full pr-2 mt-5 space-y-2 text-left text-PrimaryGreen"
          >
            <div v-for="(category, index) in categories" :key="category._id">
              <p
                class="py-3 pt-4 ml-0 text-lg tracking-wide transition-all duration-500 border-t border-gray-600 cursor-pointer text-PrimaryGreen hover:text-green-800 showI"
                @click="characterItemClick(index)"
              >
                {{ category.title }}
              </p>
              <div :data-character-id="index" class="ml-3 space-y-1 accordiong">
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
      class="mb-12 shadow fadeIn"
      :post="lastPost"
      :index="ind"
      :isLast="true"
      :catName="lastPost.category.title"
      :subCatDesc="lastPost.subcategory[0].description"
      :catDesc="lastPost.category.description"
      :subCategoryName="lastPost.subcategory[0].id"
      :catSlug="lastPost.category.slug.current"
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
  'category': *[_type == 'category' && references(^.subcategory[]._id)][0]{title,description,...}
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
  font-size: larger;
}

.hideI::before {
  content: "-";
  font-size: larger;
}
.headerPage::first-letter {
 color:#51ab33 !important;
}

.accordiong a:hover::before{
  content: "⟶";
}
.accordiong a:hover{
  color:#468330;
}
</style>
