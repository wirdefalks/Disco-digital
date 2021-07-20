<template>
<h5 class="quot">

  <slot ></slot>
</h5>

</template>

<script>
export default {
  name: 'ItalicComponent',
  props:  ['text']
}
</script>

<style scoped>
.quot{
 /* color: red; */
  display:block;
  /* background: #fff; */
  padding: 15px 10px 15px 15px;
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.2;
  color: rgb(31, 31, 31);
  text-align: justify;
  border-left: 2px solid rgb(20, 20, 20);
  /* position: absolute; */
  left: 10px;
  top:5px;

}
</style>