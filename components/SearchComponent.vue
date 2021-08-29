<template>
  <div class="flex flex-col p-4 mt-4 bg-white lg:mt-0">
    <div>
      <div class="flex items-center bg-ContainerGray">
        <input
          class="w-full px-6 leading-tight text-gray-700 bg-ContainerGray focus:outline-none"
          type="text"
          v-model="searchValue"
          placeholder="Sök"
          @change="searchTerm"
        />
        <div
          @click="searchTerm"
          class="px-1 py-1 m-1 text-white transition-all duration-500 rounded-md bg-PrimaryGreen hover:bg-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 m-2 fill-current"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      isSearch: true,
    };
  },
  methods: {
    searchTerm() {
      if (this.searchValue !== "") {
        this.$store.commit("SET_searchOrFilter", this.isSearch);
        this.$store.commit("SET_search", this.searchValue);
        this.$router.push("/search");
      }
    },
  },
};
</script>

<style></style>
