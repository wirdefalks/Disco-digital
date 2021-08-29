<template>
  <div class="flex flex-col justify-start p-12 mb-4 bg-white">
    <div class="flex flex-row items-center justify-between py-6 space-y-4">
     
      <NuxtLink :to="'/singlepost/' + post.slug.current" class="opacity-0"
        >.</NuxtLink
      >

      
    </div>
    <div class="flex flex-row items-center justify-between mb-3">
      <p class="text-gray-500">
        {{ returnDate(post._createdAt) }} av {{ post.author.name }}
      </p>
      <div class="text-right">
        <button @click="printPost(post._id)" class="bg-PrimaryGreen">
          Skriv ut
        </button>
      </div>
    </div>
     <h1 class="my-6 text-4xl font-extrabold text-left">
        {{ post.title }}
      </h1>
    <SanityContent
      class="space-y-3 text-base text-left"
      :blocks="post.body"
      :serializers="serializers"
    />
    <div class="flex flex-col items-end">
      <div class="flex flex-col text-right w-80">
        <small class="mr-1 font-bold"
          >{{ returnSub("catName", post.category, "title") }}
        </small>
        <small>{{ returnSub("catDesc", post.category, "description") }}</small>
        <small class="mr-1 font-bold"
          >{{ returnSub("subCategoryName", post.subcategory, "id") }}
        </small>
        <small>{{
          returnSub("subCatDesc", post.subcategory, "description")
        }}</small>
      </div>
      <div class="flex text-PrimaryGreen">
        <small v-for="(tag, i) in post.tags" :key="tag + i">
          <span class="text-black">[</span>
          <NuxtLink :to="'/tag/' + tag"> {{ tag }} </NuxtLink>
          <span class="text-black">] </span>
        </small>
      </div>
      <small class="my-4 cursor-pointer" @click="copyLink(post.slug.current)"
        >Copy link 📎</small
      >
    </div>
  </div>
</template>

<script>
import CustomComponent from "../../components/CustomComponent.vue";
import ItalicComponent from "../../components/ItalicComponent.vue";
import GreenComponent from "../../components/GreenComponent";
import RenderVideo from "../../components/RenderVideo";
import HtmlComponent from "../../components/HtmlComponent";
import minMax from "../../mixins/minMax";
import { groq } from "@nuxtjs/sanity";

export default {
  mixins: [minMax],
  async asyncData({ $sanity, route }) {
    const rpost = await $sanity.fetch(
      groq`*[slug.current=="${route.params.id}"]{...,"author": author->{name},"tags": tags[].label,
        "subcategory": *[_type=='subcategory' && references(^._id)]} {
  ...,
  'category': *[_type == 'category' && references(^.subcategory[]._id)]
}`
    );
    let post = rpost[0];
    return { post };
  },
  data() {
    return {
      copied: false,
      serializers: {
        types: {
          image: CustomComponent,
          video: RenderVideo,
          html: HtmlComponent,
        },
        marks: {
          highlight: GreenComponent,
          blockquote: ItalicComponent,
        },
      },
    };
  },
  methods: {
    printPost(id) {
      this.$router.push(`/printmode/${id}`);
    },
    returnSub(fromSub, fromStore, key) {
      if (fromStore[0] != undefined && fromStore[0][key]) {
        return fromStore[0][key];
      } else {
        return "";
      }
    },
    returnDesc(fromSub, fromStore, key) {
      if (fromSub) {
        return fromSub;
      } else {
        if (fromStore[0] != undefined && fromStore[0][key]) {
          return fromStore[0][key];
        }
      }
    },
  },
};
</script>

<style scoped>
h2,
h3,
h4 {
  margin-bottom: 1em !important;
  margin-top: 1.5em !important;
}
h2 {
  font-size: 1.8em;
}

h3 {
  font-size: 1.5em;
}

h4 {
  font-size: 1em;
}
ul,
ol {
  margin-left: 15px;
}
ul li {
  list-style: disc;
}

ol li {
  list-style: decimal;
}
</style>
