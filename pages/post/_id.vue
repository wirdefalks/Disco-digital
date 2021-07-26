<template>
  <div class="flex flex-col justify-start p-12 bg-white">
    <!-- <div class="p-5">
      <h1 class="text-4xl font-extrabold text-left accordion">
        {{ post.title }}
      </h1>
      <SanityContent :blocks="post.body" :serializers="serializers" />
      <div class="flex text-PrimaryGreen">
        <h4 v-for="(tag, i) in post.tags" :key="i">
          {{ tag.label }}
          <span class="text-black"></span>
        </h4>
      </div>
    </div> -->
      <div class="flex flex-row items-center justify-between py-6 space-y-4 ">
          <h1 class="text-4xl font-extrabold text-left text-PrimaryGreen">
          {{ post.title }}
        </h1>
        <button @click="copyLink">📎</button>
          <p class="text-gray-500">
            {{ returnDate(post._createdAt) }} av {{ post.author.name }}
          </p>
           
        </div>
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
            <small>{{
              returnSub("catDesc", post.category, "description")
            }}</small>
            <small class="mr-1 font-bold"
              >{{ returnSub("subCategoryName", post.subcategory, "id") }}
            </small>
            <small>{{
              returnSub("subCatDesc", post.subcategory, "description")
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
</template>

<script>
import CustomComponent from "../../components/CustomComponent.vue";
import ItalicComponent from "../../components/ItalicComponent.vue";
import GreenComponent from "../../components/GreenComponent";
import RenderVideo from "../../components/RenderVideo";
import HtmlComponent from "../../components/HtmlComponent";
import minMax from "../../mixins/minMax";
export default {
 
   mixins: [minMax],
  async asyncData({ store, params }) {
    let post = store.state.posts.find((x) => x.slug.current== params.id);
    return { post };
  },
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
    copyLink({params}){
      let link = 'https://discodigital.netlify.app/post/'+ this.post.slug.current
      console.log("🚀 ~ file: _id.vue ~ line 91 ~ copyLink ~ link", link)
    },
    returnSub(fromSub, fromStore, key) {
      
        if (fromStore[0] != undefined && fromStore[0][key]) {
          return fromStore[0][key];
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