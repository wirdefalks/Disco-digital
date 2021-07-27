<template>
  <div class="flex justify-between w-full h-16 bg-white shadow">
    <a class="logo" href="/">
      <div class="flex h-full p-3 logo">
        <img src="../static/logo.png" alt="" class="w-8 h-8 mx-3 my-auto" />
        <h3 class=" place-self-center text-PrimaryGreen">Disco Digital</h3>
      </div></a
    >
    <div class="p-5 text-PrimaryGreen">
      <a href="https://collabo.studio"
        ><h4 class="mr-4">
          Collabo Studio © {{ new Date().getFullYear() }}
        </h4></a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>