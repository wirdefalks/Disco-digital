<template>
  <div class="flex flex-col bg-white p-4 my-3">
    <div>
      <h4 class="py-2">Quick menu</h4>
      <div class="bg-ContainerGray flex items-center">
        <Treeselect
          v-model="valuex"
          :multiple="false"
          :options="options"
          @select="select"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import { groq } from "@nuxtjs/sanity";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

//this queries all(*) the categories and pushed inside each subcategory that belongs to them
const query = groq`*[_type=="category"]{
  title,subcategory[] {_type == 'reference' => ^->, _type != 'reference' => ^,}
}`;
export default {
  components: { Treeselect },
  data() {
    return {
      valuex: null,
      options: [],
    };
  },
  methods: {
    select(node) {
      let linke = node.id.toLowerCase().replace(/\s+/g, "-");
      node.children ? null : this.$router.push(`/subcategory/${linke}`);
    },
  },
  async fetch() {
    const data = await this.$sanity.fetch(query);
    this.options = data.map((x) => {
      let subc = x.subcategory.map((x) => {
        let id = x.id;
        let label = x.id;
        return {
          id,
          label,
        };
      });
      return { id: x.title, label: x.title, children: subc };
    });
  },
};
</script>

<style>
</style>