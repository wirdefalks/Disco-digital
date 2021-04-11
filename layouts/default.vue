<template>
  <div>
    <Navv />
    <Nuxt />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {

  methods: {
    initAnimation() {
      
      gsap.from('.up, .up2', {
        opacity: 0,
        y: '+=10',
        duration: 1,
      })      
    },
  },

  mounted() {
    this.initAnimation()
  },
}
</script>

<style>
</style>
