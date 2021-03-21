<template>
  <div v-if="page" class=' h-full pt-16'>
      <h1 class="text-5xl text-center font-bold">{{page.header}}</h1>
    <div v-if="mount" class="p-10">

    <FullCalendar :options='calendarOptions' />
    </div>
    <div v-for="event in page.events" :key="event.title">
        <h1>
            {{event.publishedAt}}
        </h1>
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid'
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="fullProgramme"][0]{
  events,header,
  "eventsImage": eventsImage.asset->url,
}`
export default {
  components: {
    FullCalendar
  },
  async asyncData({ $sanity }) {
    return { page: await $sanity.fetch(query) }
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ timeGridPlugin],
        initialView: 'timeGridWeek',
        nowIndicator: true,
        height: 500,
        initialEvents: []
      },
      mount:false
    }
  },
  mounted(){
      let events = this.page.events
    //   this.calendarOptions.initialEvents.push(events[0])
      events.forEach(e => {
          this.calendarOptions.initialEvents.push({title:e.title, start:e.start + ''})
      });
      console.log( this.calendarOptions.initialEvents);
      this.mount = true
  }
}
</script>

<style scoped>
  .app {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }
</style>