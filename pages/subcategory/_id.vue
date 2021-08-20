<template>
  <div>
    <div class="flex flex-col justify-start mb-4 border-b border-gray-600 bg-ContainerGray">
      <div class="pl-9 pt-9">
        <h1 class="text-3xl font-bold text-left">{{ page.id }}</h1>
        <p class="text-left">
          {{ page.description }}
        </p>
      </div>
      <ToggleAccordion class="m-2"/>
      <SinglePost
        v-for="(post, index) in page.posts"
        :post="post"
        :index="index"
        :subCategoryName="page.id"
        :subCatSlug="page.slug.current"
        :catSlug="page.category.slug.current"
        :key="'A'+ index"
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
  'category': *[_type == 'category' && references(^._id)][0]{title,description,...},
         "posts": posts[]{ _type == 'reference' => @->{...,
         "tags": tags[].label,
         "subcategory": *[_type=='subcategory' && references(^._id)]{ id,description},...,author->{name}}  }}`
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
