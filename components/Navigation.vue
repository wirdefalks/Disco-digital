<template>
  <nav
    :class="[toggle?'z-20':' z-0','absolute top-0  flex flex-wrap items-center justify-between w-full px-2 lg:px-10 py-2 bg-white']"
  >
    <div class="flex items-center flex-shrink-0 mr-6 text-white">
      <NuxtLink
        class="no-underline transition-all duration-300 text-PrimaryGreen logo hover:text-green-400 hover:no-underline"
        to="/"
      >
        <span class="pl-2 text-2xl "
          ><i class="em em-grinning"></i> Disco Digital</span
        >
      </NuxtLink>
    </div>

    <div
      :class="[
        toggle
          ? 'block lg:hidden m-3 bg-white text-PrimaryGreen rounded-md border-bg-PrimaryGreen border'
          : 'block lg:hidden m-3  bg-PrimaryGreen rounded-md',
      ]"
    >
      <div
        id="nav-toggle"
        @click="toggleNav"
        class="flex items-center px-3 py-2 rounded focus:outline-none hover:text-PrimaryGreen"
      >
        <svg
          :class="[toggle ? 'text-PrimaryGreen' : 'fill-current', 'w-3 h-3  ']"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>
    </div>

    <div
      :class="[
        toggle ? 'h-36' : 'h-0',
        'w-full flex-grow lg:flex lg:items-center lg:w-auto lg:pt-0',
      ]"
      id="nav-content"
    >
      <ul
        :class="[
          linkse ? 'opacity-100' : 'opacity-0 sm:hidden z-0',
          'pt-4 lg:pt-0 lg:opacity-100 list-reset lg:flex justify-end flex-1 items-center uppercase text-xs text-PrimaryGreen',
        ]"
      >
        <div v-for="lin in xtraLinks" :key="lin.name">
          <li class="mr-3">
            <NuxtLink
              class="inline-block px-4 py-2 no-underline transition-all duration-200 hover:text-green-900"
              :to="'/pages/' + lin.slug.current"
              >{{ lin.name }}</NuxtLink
            >
            <span class="hidden lg:inline-block">|</span>
          </li>
        </div>
        <li class="mr-3">
          <NuxtLink
            to="/omoss"
            class="inline-block px-4 py-2 no-underline transition-all duration-200 hover:text-green-900"
            >Om oss</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[ _type =="navlinks" ]{blocks[]->{...} }`;
export default {
  data: () => ({
    toggle: false,
    xtraLinks: "",
    linkse: false,
  }),
  mounted(){
    if(process.client) {
    let unorderList = document.getElementsByTagName('ul')[0]
    window.innerWidth < 600 && unorderList.addEventListener('click',()=>this.toggleNav())
  }

    },
  methods: {
    toggleNav() {
      this.toggle = !this.toggle;
      this.linkse
        ? (this.linkse = !this.linkse)
        : setTimeout(() => {
            this.linkse = !this.linkse;
          }, 300);
    },
  },
  async fetch() {
    const xtraLinks = await this.$sanity.fetch(query);
    
     this.xtraLinks = xtraLinks[0].blocks;
  },

};
</script>

<style>
nav * {
  font-family: "Space Grotesk", sans-serif;
}
#nav-content {
  transition: all 0.31s;
}
#nav-content ul {
  transition: all 0.11s;
}
a.nuxt-link-exact-active {
  color: #3c9e51;
  letter-spacing: 0.8px;
}
.logo {
  border-bottom: none !important;
}
</style>
