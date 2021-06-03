<template>
  <iframe class=" w-full h-84"
  
    :src="youtubeLink"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  name: "RenderVideo",
  props: ["url"],
  computed:{
    youtubeLink(){
      let id = this.url.split('https://www.youtube.com/')[1]
      return `https://www.youtube.com/embed/`+id
    }
  }
};
</script>