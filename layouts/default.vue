<template>
  <div>
    <Navigation />
    <div class="flex pt-20 bg-BackgroundGray">
      <div class="grid w-9/12 mx-auto">
        <Nuxt style="min-height: 70.5vh; margin-bottom: 10vh;" class="w-9/12 mx-auto" />
      </div>
      <div class="mx-auto w-2/12">
        <SearchComponent  class="shadow"/>
        <QuickMenu class="shadow"/>
        <Filters class="shadow"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
