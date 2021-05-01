<template>
  <div class="flex flex-col bg-white p-4">
    <div>
      <div class="bg-ContainerGray flex items-center">
        <input
          class="w-full bg-ContainerGray px-6 text-gray-700 leading-tight focus:outline-none"
          type="text"
          v-model="searchValue"
          placeholder="Search"
          @change="searchTerm"
        />
        <div @click="searchTerm" class="bg-PrimaryGreen text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 m-3 fill-current"
            viewBox="0 0 512.005 512.005"
            style="enable-background: new 0 0 512.005 512.005"
            xml:space="preserve"
          >
            <path
              d="m505.749 475.587-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
            />
          </svg>
        </div>
      </div>
      <h4 class="mt-3">Steg 1 valh ajkadsl</h4>
      <div>
          <Treeselect
          @change="searchTerm"
          :select="searchTerm"
          v-model="value"
          :multiple="false"
          :options="options"
          />
      </div>
    </div>
  </div>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  import { groq } from "@nuxtjs/sanity"
  // import the styles
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  const query = groq `*[_type=="category"]{
      title,subcategory[] {_type == 'reference' => ^->, _type != 'reference' => ^,}
      }`;

export default {
    components: { Treeselect },
    data() {
        return {
            value: null,
            searchValue: "",
            options: [],
        };
    },
    methods: {
        searchTerm() {
            this.$store.commit("SET_subc", this.value);
            this.$store.commit("SET_search", this.searchValue);
        }
    },
    async fetch() {
        const data = await this.$sanity.fetch(query);
        this.options = data.map((x) => {
            let subc = x.subcategory.map((x)=> {
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

<style></style>
