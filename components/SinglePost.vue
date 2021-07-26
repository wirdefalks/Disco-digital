<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div
        v-if="!isLast"
        :class="[
          !isLast ? ' border-t border-gray-600' : 'border-b border-gray-600',
          '',
        ]"
      ></div>
      <p
        v-if="!isLast"
        class="p-6 ml-0 text-lg tracking-wide border-t cursor-pointer text-PrimaryGreen showI"
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
        <!-- <h1 class="text-4xl font-extrabold text-left">
          {{ post.title }}
        </h1> -->
             <NuxtLink :to="'/singlepost/'+post.slug.current" class="opacity-0 ">.</NuxtLink>
        <button @click="copyLink(post.slug.current)">📎</button>

        <div class="flex flex-row items-center justify-between">
          <p class="text-gray-500">
            {{ returnDate(post._createdAt) }} av {{ post.author.name }}
          </p>
          <div class="text-right">
            <button @click="printPost(post._id)" class="bg-PrimaryGreen">
              Skriv ut
            </button>
          </div>
        </div>
        <SanityContent
          class="space-y-3 text-base text-left"
          :blocks="post.body"
          :serializers="serializers"
        />
        <div class="flex flex-col items-end">
          <div class="flex flex-col text-right w-80">
            <small class="mr-1 font-bold"
              >{{ returnSub(catName, post.category, "title") }}
            </small>
            <small>{{
              returnSub(catDesc, post.category, "description")
            }}</small>
            <small class="mr-1 font-bold"
              >{{ returnSub(subCategoryName, post.subcategory, "id") }}
            </small>
            <small>{{
              returnSub(subCatDesc, post.subcategory, "description")
            }}</small>
          </div>
          <div class="flex text-PrimaryGreen">
            <small v-for="(tag, i) in post.tags" :key="i">
              <span class="text-black">[</span>
              <NuxtLink :to="'/tag/' + tag"> {{ tag }} </NuxtLink>
              <span class="text-black">] </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomComponent from "./../components/CustomComponent";
import ItalicComponent from "../components/ItalicComponent";
import GreenComponent from "../components/GreenComponent";
import RenderVideo from "../components/RenderVideo";
import HtmlComponent from "../components/HtmlComponent";
import minMax from "../mixins/minMax";

export default {
  layout: "subcategory",
  mixins: [minMax],
  props: [
    "post",
    "index",
    "subCategoryName",
    "isLast",
    "subCatDesc",
    "catDesc",
    "catName",
  ],
  data() {
    return {
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
      if (fromSub) {
        return fromSub;
      } else {
        if (fromStore[0] != undefined && fromStore[0][key]) {
          return fromStore[0][key];
        }
      }
    },
  copyLink(slug) {
    let link =
      "https://discodigital.netlify.app/singlepost/" + slug;
    navigator.clipboard.writeText(link)
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

