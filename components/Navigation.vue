<template>
  <nav
    class="flex items-center justify-between absolute flex-wrap  bg-white py-1 px-10 w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <NuxtLink
        class="text-black no-underline logo hover:text-PrimaryGreen hover:no-underline"
        to="/"
      >
        <span class="text-2xl font-bold pl-2"
          ><i class="em em-grinning"></i> Disco Digital</span
        >
      </NuxtLink>
    </div>

    <div class="block lg:hidden">
      <button
        id="nav-toggle"
        @click="toggleNav"
        class="flex items-center px-3 py-2 border rounded text-gray-500 focus:outline-none border-gray-600 hover:text-black hover:border-black"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div
      :class="[
        toggle ? 'h-40' : 'h-0','w-full flex-grow lg:flex lg:items-center lg:w-auto lg:pt-0',]" id="nav-content">
      <ul
        :class="[linkse ? ' opacity-100 ': ' opacity-0 sm:hidden  ','pt-4 lg:pt-0 lg:opacity-100 list-reset lg:flex justify-end flex-1 items-center uppercase text-xs text-PrimaryGreen' ]"
      >

        <div v-for="lin in xtraLinks" :key="lin.name">
          <li class="mr-3">
            <NuxtLink
              class="inline-block no-underline transition-all duration-200 hover:text-green-900 py-2 px-4"
              :to="'/pages/' + lin.name"
              >{{ lin.name }}</NuxtLink
            >
            <span class=" hidden lg:inline-block">|</span>
          </li>
        </div>
          <li class="mr-3">
          <NuxtLink
            to="/omoss"
            class="inline-block no-underline transition-all duration-200 hover:text-green-900 py-2 px-4"
            >Om oss</NuxtLink
          >
        </li>
      </ul>
     
    </div>
  </nav>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type=="xtraPage"]`;

export default {
  data: () => ({
    toggle: false,
    xtraLinks: "",
    linkse:false
  }),
  methods: {
    toggleNav() {
      this.toggle = !this.toggle;
      this.linkse ?  this.linkse = !this.linkse
     : setTimeout(() => {
        this.linkse = !this.linkse
      }, 300);
    },
  },
  async fetch() {
    const xtraLinks = await this.$sanity.fetch(query);
    this.xtraLinks = xtraLinks;
  },
};
</script>

<style>
nav * {
  font-family: "Space Grotesk", sans-serif;
}
#nav-content{
  transition: all .31s;
}
#nav-content ul {
  transition: all .11s;
}
a.nuxt-link-exact-active {
  color: #305a39;
  border-bottom: 1px solid gray;
}
.logo{
  border-bottom: none !important;
}
</style>
