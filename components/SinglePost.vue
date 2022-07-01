<template>
 
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
        class="p-6 ml-0 text-lg tracking-wide transition-all duration-500 cursor-pointer text-PrimaryGreen hover:text-green-800 showI"
        @click="characterItemClick(index)"
      >
        {{ post.title }}
      </p>
      <div
        :data-character-id="index"
        :class="[isLast ? '' : ' accordiong', 'bg-gray-100  space-y-4']"
      >
        <!-- <h1 class="text-4xl font-extrabold text-left">
          {{ post.title }}
        </h1> -->
        <div class="p-10">
          <NuxtLink :to="'/singlepost/' + post.slug.current" class="opacity-0"
            >.</NuxtLink
          >

          <!-- <h5 v-if="true">☑️</h5> -->

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
          <SanityContent
            class="space-y-3 text-base text-left"
            :blocks="post.body"
            :serializers="serializers"
            
          />
          
          <div class="flex flex-col items-end mt-4">
            <div class="flex flex-col text-right w-80">
           
              <NuxtLink :to="catSlug ?'/category/' + catSlug : (catSlugy[0] ?'/category/' + catSlugy[0].slug.current : 'a')"> 
              <small class="mr-1 font-bold"
                >{{ returnSub(catName, post.category, "title") }}
              </small></NuxtLink>
              <small>{{
                returnSub(catDesc, post.category, "description")
              }}</small>
             <NuxtLink :to="subCatSlug ? subCatSlug : (post.subcategory[0] ?'/subcategory/' + post.subcategory[0].slug.current : '/sc')">  <small class="mr-1 font-bold"
                >{{ returnSub(subCategoryName, post.subcategory, "id") }}
              </small></NuxtLink>
              <small>{{
                returnSub(subCatDesc, post.subcategory, "description")
              }}</small>
            </div>
            <div v-if="$store.state.settings.showFilters" class="flex text-PrimaryGreen">
              <small v-for="tag in post.tags" :key="'Axx' + tag">
                <span class="text-black">[</span> 
                <NuxtLink :to="'/tag/' + tag"> {{ tag }} </NuxtLink>
                <span class="text-black">] </span>
              </small>
            </div>
            <small
              class="my-4 cursor-pointer"
              @click="copyLink(post.slug.current)"
              >Copy link 📎</small
            >
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
  data() {
    return {
      copied: false,
    };
  },
  props: [
    "post",
    "index",
    "subCatSlug",
    "catSlug",
    "catSlugy",
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
    returnLink(fromSub, fromStore, key) {
      if (fromSub) {
        return fromSub;
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

