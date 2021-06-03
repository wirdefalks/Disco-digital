
<template>
<div v-html="code">
</div>

</template>

<script>
export default {
  name: 'htmlComponent',
  props:  ['code'],
  
}
</script>