<template>
<h5 style="text-decoration:underline">

  <slot></slot>
</h5>

</template>

<script>
export default {
  name: 'ItalicComponent',
  props:  ['text']
}
</script>

