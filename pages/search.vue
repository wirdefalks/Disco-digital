<template>
  <div class="flex flex-col justify-start bg-ContainerGray ">
    <h1 class="text-3xl text-center font-bold">SEARCH</h1>
    <ToggleAccordion />
    <div >

   <div v-if="filteredContent">

    <SinglePost
      v-for="(post, index) in filteredContent"
      :post="post"
      :index="index"
      :key="post._id"
    /> 
    </div>
   </div>
    <div v-html="text" class="p-6">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      posts: this.$store.state.posts,
      found:false,
      text:''
    };
  },
  methods: {
    logg(){
      if (this.found == 0 ) {
        this.text = `<h1 >Mmm... not much over here...</h1>`
      } else {
         this.text = ``
      }
    }
  },
  computed: {
    filteredContent() {
      let f;
      if (this.$store.state.searchOrFilter) {
        f = this.posts.filter((x) =>
          x.title
            ? x.title.toLowerCase().includes(this.$store.state.search)
            : ""
        );
      } else {
        f = this.posts.filter((x) =>
          x.tags ? x.tags.sort().join().includes(this.$store.state.filters) : ""
        );
      }
     
      this.found = f.length
       this.logg()
      return f;
    },
  },
};
</script>

<style>
</style>