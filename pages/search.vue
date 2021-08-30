<template>
  <div
    class="flex flex-col justify-start px-1 mb-12 border border-white bg-ContainerGray"
  >
    <h1 class="px-4 pt-5 mx-3 mt-3 text-3xl font-bold text-left">
      Sökresultat:
      <em class="inline border-b text-PrimaryGreen"
        >{{
          $store.state.searchOrFilter
            ? $store.state.search
            : $store.state.filters
        }}
      </em>
    </h1>
    <div>
      <div v-if="filteredContent">
        <ToggleAccordion v-if="this.found != 0" class="mb-3" />
        <SinglePost
          v-for="(post, index) in filteredContent"
          :post="post"
          :index="index"
          :key="'ba' + post.title"
          :catSlugy="post.category"
        />
      </div>
    </div>
    <div v-html="text" :class="[text.length > 0 && 'bg-red-200', 'p-6 m-5']">
      {{ text.length }}
    </div>
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
      let f;
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
        let ca = this.$store.state.posts.map(
          (x) =>
            x.category[0] != undefined &&
            x.category[0]["title"]
              .toLowerCase()
              .includes(this.$store.state.search) &&
            x
        );
        ca.forEach((x) => (x != false ? f.push(x) : ""));
        c.forEach((x) => (x != false ? f.push(x) : ""));
      } else {
        f = this.posts.filter((x) =>
          x.tags ? x.tags.sort().join().includes(this.$store.state.filters) : ""
        );
      }
      f.sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.found = f.length;
      this.logg();

      let uniqueChars = f.filter((c, index) => {
        return f.indexOf(c) === index;
      });
      return uniqueChars;
    },
  },
};
</script>
