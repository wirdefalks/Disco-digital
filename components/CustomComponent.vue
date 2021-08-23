<template >
  <div class="my-2">
 <SanityImage
    :asset-id="asset._ref"
    auto="format"
    
  />  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: ['asset']
}
</script>

