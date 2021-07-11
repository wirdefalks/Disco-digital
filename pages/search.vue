<template>
  <div class="flex flex-col justify-start mb-12 bg-ContainerGray">
    <h1 class="m-4 text-3xl font-bold text-left">Sökresultat: {{$store.state.search}}</h1>
    <div>
      <div v-if="filteredContent">
        <ToggleAccordion />
        <SinglePost
          v-for="(post, index) in filteredContent"
          :post="post"
          :index="index"
          :key="index"
        />
      </div>
    </div>
    <div v-html="text" class="p-6"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: this.$store.state.posts,
      found: false,
      text: "",
    };
  },
  methods: {
    logg() {
      if (this.found == 0) {
        this.text = `<h1>Hoppsan! Tyvärr kunde vi inte hitta din låt. Fråga DJ:n om en annan eller bläddra i snabbmenyn till höger för att kunna dansa vidare.</h1>`;
      } else {
        this.text = ``;
      }
    },
  },
  computed: {
    filteredContent() {
      let f, c;
      if (this.$store.state.searchOrFilter) {
        f = this.posts.filter((x) =>
          x.title && x.plain
            ? x.title.toLowerCase().includes(this.$store.state.search) ||
              x.plain.toLowerCase().includes(this.$store.state.search)
            : ""
        );
        let c = this.$store.state.posts.map(
          (x) =>
            x.subcategory[0] != undefined &&
            x.subcategory[0]["id"]
              .toLowerCase()
              .includes(this.$store.state.search) &&
            x
        );
        let nc = c.forEach((x) => (x != false ? f.push(x) : ""));
      } else {
        f = this.posts.filter((x) =>
          x.tags ? x.tags.sort().join().includes(this.$store.state.filters) : ""
        );
      }
      
      this.found = f.length;
      this.logg();
      return f;
    },
  },
};
</script>

<style>
</style>
