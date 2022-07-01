<template>
  <div class="overflow-x-hidden tot">
    <Navigation />
    <div
      class="
        flex flex-col-reverse
        pt-16
        lg:pt-20
        md:flex-col-reverse
        lg:flex-row
        tot
        bg-BackgroundGray
        min-h-100vh
      "
    >
      <Nuxt class="mx-2 lg:mx-auto lg:w-8/12" />
      <div v-if="true" class="z-10 mx-2 lg:mx-auto fadeInCG lg:w-2/12">
        <SearchComponent class="shadow" />
        <QuickMenu class="shadow" />
        <Filters v-if="$store.state.settings.showFilters" class="shadow" />
      </div>
    </div>
    <Footer class="w-8/12" />
  </div>
</template>

<script>
export default {
  data() {
    return { searchi: false };
  },
  mounted() {
    if (process.client) {
      window.innerWidth < 600 ? (this.searchi = false) : (this.searchi = true);
    }
  },
};
if (process.client) {
  var styles =
    ".satInC{animation:satAn 0.87s;}@keyframes satAn {from {filter: saturate(1);}to {filter: saturate(0)}}.fadeInC{animation:fadeAn 0.87s;}@keyframes fadeAn {from {opacity: 0;}to {opacity: 1;}}.scaleUpC{animation:scaleU 0.87s;}@keyframes scaleU {from {opacity: 0;transform: scale(0.7);}to {opacity: 1;transform: scale(1);}}.scaleDC{animation:scaleD 0.87s;}@keyframes scaleD {from {opacity: 0;transform: scale(1.2);}to {opacity: 1;transform: scale(1);}}.fadeLC{animation:fadeL 0.87s;}@keyframes fadeL {from {opacity: 0;transform: translateX(-30px);}to {opacity: 1;transform: translateX(0);}} .fadeRC{animation:fadeR 0.87s;}@keyframes fadeR {from {opacity: 0;transform: translateX(30px);}to {opacity: 1;transform: translateX(0);}}";
  let styleSheet = document.createElement("style");
  (styleSheet.type = "text/css"),
    (styleSheet.innerText = styles),
    document.head.appendChild(styleSheet);
  let fadeInTarg = document.querySelectorAll(".fadeIn"),
    scaleDTarg = document.querySelectorAll(".scaleDown"),
    satDTarg = document.querySelectorAll(".satDown"),
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
    satDTarg &&
      fadeInTarg.forEach((e) => {
        (e.style.opacity = 0), io(e, "satInC");
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
.fadeInCG {
  animation: fadeInCG 0.5s;
}

@keyframes fadeInCG {
  from {
    opacity: 0;
    transform: scale(0.99);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.min-h-100vh {
  min-height: 91vh;
}
@media only screen and (min-width: 1300px) {
  .min-h-100vh {
    min-height: 93vh;
  }
}
</style>
