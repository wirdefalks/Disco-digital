<template>
  <div>
    <Navigation />
    <div
      class="flex flex-col-reverse pt-20 md:flex-col-reverse lg:flex-row bg-BackgroundGray min-h-100vh"
    >
      <Nuxt
        class="mx-2 lg:mx-auto lg:w-8/12"
      />
      <div class="mx-auto w-2/12">
        <SearchComponent class="shadow" />
        <QuickMenu class="shadow" />
        <Filters class="shadow" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {

};
</script>

<style>
.min-h-100vh{
  min-height: 91vh;
}
</style>
