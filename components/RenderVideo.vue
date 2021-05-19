<template>
  <iframe :src="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
    name: "RenderVideo",
    props: ["url"],
}
</script>