<template>
  <div class="flex flex-col justify-start bg-ContainerGray">
    <div class="p-5">
      <h1 class="text-4xl font-extrabold text-left accordion">
        {{ post.title }}
      </h1>
      <SanityContent :blocks="post.body" :serializers="serializers" />
      <div class="flex text-PrimaryGreen">
        <h4 v-for="(tag) in post.tags" :key="'Ac'+ tag">
          {{ tag.label }}
          <span class="text-black"></span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import CustomComponent from "../../components/CustomComponent.vue";

export default {
  layout: "printMode",
  async asyncData({ store, params }) {
    let post = store.state.posts.find((x) => x._id == params.id);
    return { post };
  },
  data() {
    return {
      serializers: {
        types: {
          image: CustomComponent,
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      if (process.client) {
        window.print();
        this.$router.go(-1);
      }
    }, 2000);
  },
};
</script>

<style>
</style>
