
<template>
<div>


<div v-html="code" >
</div>
</div>

</template>

<script>
export default {
  name: 'htmlComponent',
  props:  ['code'],
  
}
</script>
