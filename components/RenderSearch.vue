<template>
  <div class="flex flex-col justify-start bg-ContainerGray">
      <h1 class="text-3xl text-center">SEARCH</h1>
      <div>
          <div v-if="foundPosts">
              <div
              v-for="(post, index) in foundPosts"
              :key="`${index}-${post._id}`"
              class="border-b border-black"
              >
              <p
              class="text-PrimaryGreen p-6 cursor-pointer ml-0 font-bold border-black"
              @click="characterItemClick2(index)"
              >
              <!-- modificar el + para hacerlo dinamico y transformarlo a - cuando se expanda -->
                + {{ post.title }}
              </p>
              <div
              :data-character-id2="index"
              class="bg-gray-100 p-10 space-y-4 hidden"
              >
              <h1 class="text-4xl text-left font-extrabold accordion2">{{ post.title }}</h1>
              <p class="text-gray-500">
                  {{ returnDate(post.publishedAt) }} av {{ post.author.name }}
              </p>
              <div class="text-right">
                  <button class="m-3 px-5 rounded-md bg-PrimaryGreen"> Skry ut</button>
              </div>
              <SanityContent :blocks="post.body" />
              <div class="flex text-PrimaryGreen">
                  <h4 v-for="tag in post.tags" :key="tag._id">
                      {{ tag }}
                      <span class="text-black"> | </span>
                      </h4>
              </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
data() {
    return {
        posts: this.$store.state.posts,
    };
},

methods: {
    characterItemClick2(characterIndex) {
      const characterInfoElement = document.querySelector(
        '[data-character-id2="' + characterIndex + '"]'
      );
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.remove("block");
        characterInfoElement.classList.add("hidden");
      } else {
        characterInfoElement.classList.remove("hidden");
        characterInfoElement.classList.add("block");
      }
    },
    returnDate: (a) => new Date(a).toLocaleString("en-EN")
},
computed: {
    foundPosts() {
        return this.$store.state.posts.filter(
            (x) => 
            x.category.subcategory.label == this.$store.state.subc &&
            x.title.toLowerCase().includes(this.$store.state.search)
        )
    }
}
}
</script>

<style>

</style>