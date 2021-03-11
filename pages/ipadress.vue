<template>
  <div id="app">
    <h1><span style="color: #0000ff">Local IP Info</span></h1>
    <table class="darkTable">
      <tr>
        <td>IP number:</td>
        <td>{{ results.ip }}</td>
      </tr>
      <tr>
        <td>Host address:</td>
        <td>{{ results.hostname }}</td>
      </tr>
      <tr>
        <td>City name:</td>
        <td>{{ results.city }}</td>
      </tr>
      <tr>
        <td>Region name:</td>
        <td>{{ results.region }}</td>
      </tr>
      <tr>
        <td>Country code:</td>
        <td>{{ results.country }}</td>
      </tr>
      <tr>
        <td>GPS:</td>
        <td>{{ results.loc }}</td>
      </tr>
      <tr>
        <td>Postal code:</td>
        <td>{{ results.postal }}</td>
      </tr>
      <tr>
        <td>Organization:</td>
        <td>{{ results.org }}</td>
      </tr>
    </table>


  </div>
</template>

<script>
const url = 'http://ipinfo.io/json'
export default {
  async asyncData({ $axios }) {
    const results = await $axios.$get('http://ipinfo.io/json')
    return { results }
  },
}
</script>

<style>
  </style>