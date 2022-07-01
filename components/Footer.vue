<template>
  <div class="flex justify-between w-full h-16 bg-white shadow">
    <a class="logo" href="/">
      <div class="flex h-full p-3 logo">
        <SanityImage
          :asset-id="logo.asset._ref"
          class="w-8 h-8 mx-3 my-auto"
          auto="format"
        />
        <h3 class="text-sm place-self-center text-PrimaryGreen lg:text-base">
          Disco Digital
        </h3>
      </div>
    </a>
    <div class="flex p-5 text-PrimaryGreen">
      <a href="https://collabo.studio" class="place-self-center"
        ><h4 class="mr-4 text-sm lg:text-base">
          Collabo Studio <span class="text-black">©</span>
          {{ new Date().getFullYear() }}
        </h4></a
      >
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type=="settings"]`;
export default {
  data: () => ({
    logo: "",
  }),

  async fetch() {
    const queryData = await this.$sanity.fetch(query);
    this.logo = queryData[0].logo;
  },
};
</script>
 
<style>
</style>