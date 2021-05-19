<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="border-b border-black"></div>
      <p
      v-if="!isLast"
        class="text-PrimaryGreen p-6 cursor-pointer ml-0 font-bold border-black showI"
        @click="characterItemClick(index)"
      >
        {{ post.title }}
      </p>
      <div
        :data-character-id="index"
        :class="[
          isLast ? '' : 'hidden accordion',
          'bg-gray-100 p-10 space-y-4',
        ]"
      >

        <small v-for="subc in post.subcategory" :key="subc.id" class="text-PrimaryGreen">{{ subc.id }}</small>
        <h1 class="text-4xl text-left font-extrabold">
          {{ post.title }}
        </h1>
        <p class="text-gray-500">
          {{ returnDate(post.publishedAt) }} av {{ post.author.name }}
        </p>
        <div class="text-right">
          <button
            @click="printPost(post._id)"
            class="m-3 px-5 rounded-md bg-PrimaryGreen"
          >
            Skry ut
          </button>
        </div>
        <SanityContent
          class="space-y-2 text-base text-left"
          :blocks="post.body"
          :serializers="serializers"
        />
        <div class="flex text-PrimaryGreen">
          <h4 v-for="(tag, i) in post.tags" :key="i">
            {{ tag.label || tag }}
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
import RenderVideo from "../components/RenderVideo";
import minMax from "../mixins/minMax";

export default {
  layout: "subcategory",
  mixins: [minMax],
  props: ["post", "index", "subCategoryName", "isLast"],
  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
          video: RenderVideo,
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
      this.$router.push(`/printmode/${id}`);
    },
    
  },mounted(){
    console.log(this.post)
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
