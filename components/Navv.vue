<template>
  <nav
    class="flex items-center justify-between absolute flex-wrap bg-green-100 p-2 shadow w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a
        class="text-blue-800 no-underline hover:text-white hover:no-underline"
        href="/"
      >
        <span class="text-2xl pl-2"><i class="em em-grinning"></i> Events</span>
      </a>
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
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        
        <li class="mr-3">
          <a href="/about"
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            
            >About</a
          >
        </li>
        <li class="mr-3">
          <a href="/fullprogramme"
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            
            >Full Programme</a
          >
        </li>
        <li class="mr-3">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            href="/meetTheSpeakers"
            >Meet The Speakers</a
          >
        </li>
        <li class="mr-3">
          <a
            class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
            href="/archives"
            >Archives</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({ toggle: false }),
  methods: {
    toggleNav() {
      this.toggle = !this.toggle
    },
  },
}
</script>

<style></style>
