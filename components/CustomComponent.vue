<template >
  <div>
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

