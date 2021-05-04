<template>
  <div>
    <Navigation />
    <div class="flex pt-20 bg-BackgroundGray">
      <div class="grid w-9/12 mx-auto">
        <!-- <RenderSearch class="w-9/12 mx-auto" /> -->
        <Nuxt class="w-9/12 mx-auto" />
      </div>
      <div class="mx-auto w-2/12">
        <SearchComponent />
         <SubMenu />
           <Filters />
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
