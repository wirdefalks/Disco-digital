<template>
  <div class="flex flex-col p-4 my-3 bg-white">
    <div>
      <label class=" text-PrimaryGreen">Snabbmeny
      <div class="flex items-center my-3 bg-ContainerGray">
        <Treeselect
          v-model="valuex"
          :multiple="false"
          placeholder="Välj"
          :options="options"
          @select="select"
        />
      </div>
      </label>
    </div>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import { groq } from "@nuxtjs/sanity";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

//this queries all(*) the categories and pushed inside each subcategory that belongs to them
const query = groq`*[_type=="category"] | order(title asc) {
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
    let subc
    const data = await this.$sanity.fetch(query);
    if (data) {
      this.options = data.map((x) => {
        if(x.subcategory){
            subc = x.subcategory.map((x) => {
            let id = x.slug.current;
            let label = x.id;
            return {
              id,
              label,
            };
          });
        } else {
          subc = []
        }
        return { id: x.title, label: x.title, children: subc };
      });
    }
  },
};
</script>

<style>
</style>
