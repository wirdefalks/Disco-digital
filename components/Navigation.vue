<template>
  <nav
    class="flex items-center justify-between absolute flex-wrap bg-white py-1 px-10 w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <NuxtLink
        class="text-blue-800 no-underline hover:text-green-600 hover:no-underline"
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
        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
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
        toggle ? '' : 'hidden',
        'w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0',
      ]"
      id="nav-content"
    >
      <ul
        class="list-reset lg:flex justify-end flex-1 items-center uppercase text-xs text-black"
      >
        <li class="mr-3">
          <NuxtLink
            to="/about"
            class="inline-block no-underline transition-all duration-200 hover:text-blue-800 py-2 px-4"
            >About</NuxtLink
          >
        </li>  
        <div v-for="lin in xtraLinks" :key="lin.name">
          <li class="mr-3">
            <NuxtLink
              class="inline-block no-underline transition-all duration-200 hover:text-blue-800 py-2 px-4"
              :to="'/pages/' + lin.name"
              >{{ lin.name }}</NuxtLink
            >
          </li>
           </div>
       
      </ul>
      </div>
  </nav>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content";
import Categories from './Categories.vue';
const query = groq`*[_type=="xtraPage"]`;

export default {
  components: { SanityContent, Categories },

  async asyncData({ $sanity }) {
    const page = await $sanity.fetch(query);
  },
  data: () => ({
    toggle: false,
    xtraLinks:'',
    navLinks: [
      { name: "art", link: "/pages/art" },
      { name: "soul", link: "/pages/soul" },
    ],
  }),
  methods: {
    toggleNav() {
      this.toggle = !this.toggle;
    },
     async fetchSomething() {
    const data = await this.$axios.$get('https://qp66vak1.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22xtraPage%22%5D')
    this.xtraLinks = data.result
  }
  },mounted(){
    this.fetchSomething()
  }
};
</script>

<style>
nav * {
  font-family: "Space Grotesk", sans-serif;
}

a.nuxt-link-exact-active {
  color: #392f70;
  border-bottom: 1px solid gray;
}
</style>
