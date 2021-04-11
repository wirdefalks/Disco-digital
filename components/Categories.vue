<template>
  <div>
    <Treeselect class=" w-72" @select="searchChange" v-model="value" :multiple="false" :options="options" />
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";

import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  components: { Treeselect },
  data() {
      return {
        // define the default value
        value: null,
        categories:'',
        // define options
        options: [],
      }
    },
  methods: {
   
    async fetchSomething() {
    const data = await this.$axios.$get("https://ygcad2ic.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22category%22%5D%7B%0A%20%20title%2Csubcategory%5B%5D%20%7B_type%20%3D%3D%20'reference'%20%3D%3E%20%5E-%3E%2C%20_type%20!%3D%20'reference'%20%3D%3E%20%5E%2C%7D%0A%7D")
   
    let cat = data.result.map(x=>{
        let id = x.title;
       let label =x.title;
       let children = x.subcategory
       return { id,label, children}
    })
    
         this.options= cat 
  }, searchChange (node, instanceId){
      
      this.$router.push('/subcategory/'+ node.id)
  }
  },mounted(){
    this.fetchSomething()
  }
};
</script>

<style>
</style>