<template>
  <div>
    <div class="flex flex-col justify-start border-b border-black bg-ContainerGray">
      <div class="p-5">
        <h1 class="text-3xl font-bold text-left">{{ page.id }}</h1>
        <p class="text-left">
          {{ page.description }}
        </p>
      </div>
      <ToggleAccordion />
      <SinglePost
        v-for="(post, index) in page.posts"
        :post="post"
        :index="index"
        :subCategoryName="page.id"
        :key="post._id"
        :catName="page.category.title"
        :subCatDesc="page.description"
        :catDesc="page.category.description"
      />
    </div>
      <hr>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

export default {
  async asyncData({ $sanity, route }) {
    const subcategory = await $sanity.fetch(
      groq`*[slug.current=="${route.params.id}"]{
        ...,
  'category': *[_type == 'category' && references(^._id)][0]{title,description},
         "posts": posts[]{ _type == 'reference' => @->{...,
         "tags": tags[].label,
         "subcategory": *[_type=='subcategory' && references(^._id)]{ id,description},...,author->{name}}  }}`
    );
    const page = subcategory[0];
    console.log(page);
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
