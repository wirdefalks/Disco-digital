<template>
  <div>
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div v-if="!isLast"
        :class="[
          !isLast ? ' border-t border-black' : 'border-b border-black',
          '',
        ]"
      ></div>
      <p
        v-if="!isLast"
        class="p-6 ml-0 font-bold border-black cursor-pointer text-PrimaryGreen showI"
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
        <h1 class="text-4xl font-extrabold text-left">
          {{ post.title }}
        </h1>
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
          <div class="flex flex-col w-80 text-right">
          
         <small class="mr-1 font-bold">{{returnCat(catName, post.subcategory)}} </small> <small>{{catDesc}}</small>
         <small class="mr-1 font-bold">{{returnSub(subCategoryName,post.subcategory)}} </small> <small>{{subCatDesc}}</small>
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
import CustomComponent from "../components/CustomComponent";
import ItalicComponent from "../components/ItalicComponent";
import GreenComponent from "../components/GreenComponent";
import RenderVideo from "../components/RenderVideo";
import HtmlComponent from "../components/HtmlComponent";
import minMax from "../mixins/minMax";

export default {
  layout: "subcategory",
  mixins: [minMax],
  props: ["post", "index", "subCategoryName", "isLast","subCatDesc","catDesc","catName"],
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
    returnSub(fromSub, fromStore){
     
     return fromSub? fromSub : ((fromStore && fromStore[0] ) ?  fromStore[0].id : '') ? '' :''
    },
    returnCat(fromSub, fromStore){
      return fromSub? fromSub : ((fromStore && fromStore[0]) ? fromStore[0].id : '') ? '' :''

    }
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
ul, ol{
  margin-left: 15px;
}
ul li{
  list-style: disc;
}

ol li {
  list-style: decimal;
}
</style>

