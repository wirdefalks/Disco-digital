export const state = () => ({
    posts: null,
    search:'',
    subc:''
})

export const mutations = {
    SET_posts(state, posts){
        state.posts = posts
    },
    SET_search(state, search){
        state.search = search
    },
    SET_subc(state, subc){
        state.subc = subc
    },
}

export const actions = {
    async nuxtServerInit({ commit }) {
    const data = await this.$axios.$get('https://qp66vak1.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A%20%20...%2C%0A%20%20author-%3E%7Bname%7D%2C%0A%20%20category%7B%0A%20%20%20subcategory-%3E%7Blabel%7D%7D%0A%7D')
    // console.log(data.result);
    commit('SET_posts', data.result)
    }
}