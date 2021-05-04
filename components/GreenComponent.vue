<template>
 <div style="backgroundColor:green; color:white; width:'96%';padding:3% ">
 <p style="wordBreak: break-all;"> <slot></slot></p>

</div>
</template>

<script>
export default {
  name: 'GreenComponent',
  props:  ['text']
}
</script>

