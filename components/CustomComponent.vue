<template>
  <SanityImage :asset-id="asset._ref" auto="format"></SanityImage>
</template>

<script>


export default {
    name:"CustomComponent",
    props: ['asset']
   }
</script>

<style>

</style>