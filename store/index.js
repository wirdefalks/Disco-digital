export const state = () => ({
  posts: null,
  search: "",
  subc: "",
  searchOrFilter: null,
  filters: "",
  settings: null,
});

export const mutations = {
  SET_posts(state, posts) {
    state.posts = posts;
  },
  SET_search(state, search) {
    state.search = search;
  },
  SET_subc(state, subc) {
    state.subc = subc;
  },
  SET_searchOrFilter(state, searchOrFilter) {
    state.searchOrFilter = searchOrFilter;
  },
  SET_filters(state, filters) {
    state.filters = filters;
  },
  SET_settings(state, settings) {
    state.settings = settings;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const data = await this.$axios.$get(
      "https://qp66vak1.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A%20%20...%2C%0A%20%20%22author%22%3A%20author-%3E%7Bname%7D%2C%0A%20%20%22plain%22%3A%20pt%3A%3Atext(body)%2C%0A%20%20%22tags%22%3A%20tags%5B%5D.label%2C%0A%20%20%22subcategory%22%3A%20*%5B_type%3D%3D'subcategory'%20%26%26%20references(%5E._id)%5D%0A%7D%20%7B%0A%20%20...%2C%0A%20%20'category'%3A%20*%5B_type%20%3D%3D%20'category'%20%26%26%20references(%5E.subcategory%5B%5D._id)%5D%0A%7D"
    );
    commit("SET_posts", data.result);
    const settings = await this.$axios.$get(
      "https://qp66vak1.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D%22settings%22%5D"
    );
    commit("SET_settings", settings.result[0]);
  },
};
