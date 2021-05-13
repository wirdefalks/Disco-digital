<template>
<div class="flex flex-col justify-start bg-ContainerGray">
    <div class="p-5">
        <h1 class="text-4xl text-left font-extrabold accordion">{{ post.title }}</h1>
        <SanityContent :blocks="post.body" />
        <div class="flex text-PrimaryGreen">
            <h4 v-for="(tag, i) in post.tags" :key="i">
                {{ tag.label }}
                <span class="text-black"></span>
            </h4>
        </div>
    </div>
</div>
</template>

<script>
export default {
layout: "printMode",
async asyncData({ store, params }) {
    let post = store.state.posts.find((x) => x._id == params.id)
    return { post };
},
mounted() {
    setTimeout(() => {
        if(process.client) {
            window.print()
        }
    }, 2000)
}
}
</script>

<style>

</style>