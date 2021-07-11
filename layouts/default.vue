<template>
  <div class="overflow-x-hidden">
    <Navigation />
    <div
      class="flex flex-col-reverse pt-16 lg:pt-20 md:flex-col-reverse lg:flex-row bg-BackgroundGray min-h-100vh"
    >
      <Nuxt
        class="mx-2 lg:mx-auto lg:w-8/12"
      />
      <div v-if="searchi" class="z-10 mx-2 lg:mx-auto fadeInCG lg:w-2/12">
        <SearchComponent class="shadow" />
        <QuickMenu class="shadow" />
        <Filters class="shadow" />
      </div>
       <button class="w-12 lg:hidden z-10" @click="searchi = !searchi"> <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 m-1 fill-current"
            viewBox="0 0 512.005 512.005"
            style="margin: 2px 6px 2px -5px;"
            xml:space="preserve"
          >
            <path
              d="m505.749 475.587-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
            /> </svg> </button>
    </div>
    <Footer class="w-8/12" />
  </div>
</template>

<script>
export default {
data() {
  return { searchi: false }
},
mounted() {
  if(process.client) {
    window.innerWidth < 600 ? this.searchi = false : this.searchi = true
  }
}
};
if (process.client) {
  var styles =
    ".fadeInC{animation:fadeAn 0.87s;}@keyframes fadeAn {from {opacity: 0;}to {opacity: 1;}}.scaleUpC{animation:scaleU 0.87s;}@keyframes scaleU {from {opacity: 0;transform: scale(0.7);}to {opacity: 1;transform: scale(1);}}.scaleDC{animation:scaleD 0.87s;}@keyframes scaleD {from {opacity: 0;transform: scale(1.2);}to {opacity: 1;transform: scale(1);}}.fadeLC{animation:fadeL 0.87s;}@keyframes fadeL {from {opacity: 0;transform: translateX(-30px);}to {opacity: 1;transform: translateX(0);}} .fadeRC{animation:fadeR 0.87s;}@keyframes fadeR {from {opacity: 0;transform: translateX(30px);}to {opacity: 1;transform: translateX(0);}}";
  let styleSheet = document.createElement("style");
  (styleSheet.type = "text/css"),
    (styleSheet.innerText = styles),
    document.head.appendChild(styleSheet);
  let fadeInTarg = document.querySelectorAll(".fadeIn"),
    scaleDTarg = document.querySelectorAll(".scaleDown"),
    scaleUTarg = document.querySelectorAll(".scaleUp"),
    fadeLeftTarg = document.querySelectorAll(".fadeLeft"),
    fadeRightTarg = document.querySelectorAll(".fadeRight"),
    ae = (e, a) => {
      e.classList.add(a),
        setTimeout(() => {
          e.style.opacity = 1;
        }, 50);
    };
  function io(e, a) {
    new IntersectionObserver((t) =>
      t.forEach((t) => ((t) => t.isIntersecting && ae(e, a))(t))
    ).observe(e);
  }
  fadeLeftTarg &&
    fadeLeftTarg.forEach((e) => {
      (e.style.opacity = 0), io(e, "fadeRC");
    }),
    fadeRightTarg &&
      fadeRightTarg.forEach((e) => {
        (e.style.opacity = 0), io(e, "fadeLC");
      }),
    fadeInTarg &&
      fadeInTarg.forEach((e) => {
        (e.style.opacity = 0), io(e, "fadeInC");
      }),
    scaleDTarg &&
      scaleDTarg.forEach((e) => {
        (e.style.opacity = 0), io(e, "scaleDC");
      }),
    scaleUTarg &&
      scaleUTarg.forEach((e) => {
        (e.style.opacity = 0), io(e, "scaleUpC");
      });
}
</script>

<style>
.fadeInCG{
  animation: fadeInCG 0.5s;
}

@keyframes fadeInCG{
  from {
    opacity: 0;
    transform: scale(.99);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}

.min-h-100vh{
  min-height: 91vh;
}
</style>
