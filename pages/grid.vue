<template>
  <section class="grid1 lg:grid-cols-broken  lg:grid-cols-brokenCol">
  
  <div class="img1"></div>
  
  <div class="img2"></div>
  
  <div class="strapline">
    <blockquote>“Almost immediately, word spread of a Welshman who had built this incredible sounding sub bass system, and soon enough audiophiles began searching out these legendary subs that were built like no other.”</blockquote>
  </div>
  
  <div class="img3"></div>
  
  <div class="cta-wrapper">
    
    <div class="cta">
      <h1>Gibraltar</h1>
      <p>Introducing 212/SE, our most powerful and agile subwoofer, designed exclusively for larger systems and rooms to allow superior state of the art speakers to spring to full voice.</p>
      <a class="button" href="">View Product Details →</a>
    </div>
    
  </div>
  
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* based on https://dribbble.com/shots/2792525-Rel-Acoustics/attachments/571167 */
/* main styles */

* {
  box-sizing: border-box;
}

body {
  color: #292929;
  font: 1em/1.7 'Open sans', sans-serif;
}


blockquote {
  font: 1.1em/2 'Playfair Display', serif;
  font-style: italic;
  margin: 0 0 2em 0;
}

.img1 {  
  /* could use `object-fit: cover;` on an img, but tricky*/
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wooden.jpg);
  background-size: cover;
}

.img2 {  
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/speaker.jpg);
  background-size: cover;
}

.img3 {  
  /* https://elements.envato.com/gradient-network-wave-backgrounds-L5PGKP */
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/waves.jpg);
  background-size: cover;
}

.strapline::before {
  content: '';
  display: block;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wavy.svg) repeat-x;
  background-size: cover;
  width: 20%;
  height: .5em;
  position: absolute;
  top: -3em;
  left: 40%;
}

.cta h1 {    
  font: bold 4em/1 'Playfair Display', serif;
  margin: 0 0 20px 0;
  position: relative;
}


.button {
  display: inline-block;
  color: white;
  text-decoration: none;
  background: #292929;
  padding: .8em 1.5em;
  width: 100%;
}

.button:hover {
  background: black;
}


/* grid */

.grid1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 20px;
}

.img2 {
  height: 400px;
}

.strapline {
  margin-top: 100px;
  position: relative;
}

@media only screen and (min-width: 750px) {
  
  .grid1 {
    grid-template-columns: 3fr 6fr 1fr 5fr 10fr 2fr;
    grid-template-rows: 100px auto 15px auto auto;
    padding: 0;
  }

  .img1 {  
    grid-column: 1 / 3;
    grid-row: 2 / 5;
  }

  .img2 {  
    grid-column: 2 / 4;
    grid-row: 3 / 6;
  }

  .img3 {  
    grid-column: 5 / 7;
    grid-row: 4 / 6;
  }

  .strapline {
    grid-column: 3 / 6;
    grid-row: 2 / 3;

    padding: 0 16%;
    text-align: center;
    margin: 0;
  }

  .cta-wrapper {
    grid-column: 4 / 6;
    grid-row: 4 / 6;
  }

    .cta {
      padding: 100px 0 100px 10%;
    }
  
  .cta h1 {    
    font-size: 6em;
  }
  
  .button {
    width: auto;
  }

}
  
@media only screen and (min-width: 1100px) {
  
    .cta {
      padding: 100px 0 100px 20%;
    }
  
  .cta h1::before {
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    /* https://elements.envato.com/retro-badges-7B35YA */
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/badge.svg) no-repeat center center;
    background-size: 80%;
    position: absolute;
    left: -120px;
    top: 0;
  }
  
  
}
</style>