<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray ">
      <div  :class="[
          index == 0 ? ' border-t border-black' : 'border-b border-black',
          '',
        ]"></div>
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
          {{ returnDate(post._createdAt) }} av {{ post.author.name }}
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
            <small v-for="(tag, i) in post.tags" :key="i">
               <span class="text-black">[</span>
              {{ tag.label }}
              <span class="text-black">] </span> 
            </small>
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
import HtmlComponent from "../components/HtmlComponent";
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
          html: HtmlComponent,

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
     returnTags(tags) {
    let a = [],
      b = [],
      c = [];
    tags.forEach((x) => {
      if (x.value == "beginner" || x.value == "advanced") {
        a.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
      if (x.value == "student" || x.value == "teacher") {
        b.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
      if (x.value == "kristianstad" || x.value == "malmoe") {
        c.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
    });
    return `<div class="grid"> <h4>Level : ${a}</h4>  <h4>I am a: ${b}</h4>  <h4>University: ${c}</h4> </div>`;
  },
    
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
