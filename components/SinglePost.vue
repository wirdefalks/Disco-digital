<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="border-b border-black"></div>
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
      <small class="text-PrimaryGreen">{{ subCategoryName }}</small>
        <h1 class="text-4xl text-left font-extrabold ">
          {{ post.title }}
        </h1>
        <p class="text-gray-500">
          {{ returnDate(post.publishedAt) }} av {{ post.author.name }}
        </p>
        <div class="text-right">
          <button @click="printPost(post._id)" class="m-3 px-5 rounded-md bg-PrimaryGreen">Skry ut</button>
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
</template>

<script>
import CustomComponent from "../components/CustomComponent";
import ItalicComponent from "../components/ItalicComponent";
import GreenComponent from "../components/GreenComponent";
import minMax from "../mixins/minMax";
export default {
  layout: "subcategory",
  mixins: [minMax],
  props: ["post", "index", "subCategoryName"],
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
  methods: {
    printPost(id) {
      this.$router.push(`/printmode/${id}`)
    }
  }
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
