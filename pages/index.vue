<template>
  <div>
    <!-- <div >
      <h1>loading</h1>
    </div> -->
    <div>
      <div class="section relative">
        <div
          class="absolute inset-0 w-full h-full -z-1 bg-cover bg bg-center bg-no-repeat"
          :style="{
            backgroundImage: 'url(' + require('~/assets/k1.jpg') + ')',
          }"
        >
          <h1
            class="text-6xl text-center uppercase text-yellow-100 font-bold p-20"
          >
            lorem parallax porrem
          </h1>
        </div>
      </div>
      
      <section class="relative">
        <div class="p-20">
          <h1 class="text-6xl text-center font-bold heading">
            SOME HEADING OVER HERE
          </h1>
        </div>
        <video
          ref="video"
          :class="['absolute inset-0 w-full h-full   -z-1 ', 'object-cover']"
          :src="vid"
          muted
          loop
          playsinline
          autoplay
        />
      </section>
      <section class="bg-pink-400 pink">
        <div class="text-2xl text-center p-60 w-2/3 text-blue-300">
          <h4 class="textPink">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse
            ipsam repudiandae, ipsa tempora aut totam voluptatibus nostrum
            maxime illo voluptatum laudantium, in inventore eos sunt ut error
            nemo officiis. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Iure esse ipsam repudiandae, ipsa tempora aut totam
            voluptatibus nostrum maxime illo voluptatum laudantium, in inventore
            eos sunt ut error nemo officiis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum maxime illo voluptatum
            laudantium, in inventore eos sunt ut error nemo officiis. met
            consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum m met consectetur adipisicing
            elit. Iure esse ipsam repudiam dolor, sit amet consectetur
            adipisicing elit. Iure esse ipsam repudiandae, ipsa tempora aut
            totam voluptatibus nostrum maxime illo voluptatum laudantium, in
            inventore eos sunt ut error nemo officiis. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum maxime illo voluptatum
            laudantium, in inventore eos sunt ut error nemo officiis. met
            consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum m met consectetur adipisicing
            elit. Iure esse ipsam repudiam dolor, sit amet consectetur
            adipisicing elit. Iure esse ipsam repudiandae, ipsa tempora aut
            totam voluptatibus nostrum maxime illo voluptatum laudantium, in
            inventore eos sunt ut error nemo officiis. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum maxime illo voluptatum
            laudantium, in inventore eos sunt ut error nemo officiis. met
            consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum m met consectetur adipisicing
            elit. Iure esse ipsam repudiandae, ipsa tempora aut totam
            voluptatibus nostrum mmet consectetur adipisicing elit. Iure esse
            ipsam repudiandae, ipsa tempora aut totam voluptatibus nostrum mmet
            consectetur adipisicing elit. Iure esse ipsam repudiandae, ipsa
            tempora aut totam voluptatibus nostrum m
          </h4>
        </div>
      </section>
      <section class="bg-green-300">
        <div
          class="description panel blue bg-green-300 p-40 text-2xl text-center"
        >
          <div class="p-10">
            <h1>Scrub animations</h1>
            <p>
              A ScrollTrigger with <code>scrub: true</code> links the scroll
              position to an animation's progress, making the scroll bar act
              like a scrubber while it's between the ScrollTrigger's
              <code>start</code> and <code>end</code>.
            </p>
            <div class="scroll-down">
              Scroll down
              <div class="arrow"></div>
            </div>
            <img
              class="w-1/3 m-auto graph"
              src="~/assets/graph-18.png"
              alt="a"
            />
          </div>
        </div>
      </section>
      <section class="panel bg-red-400 red p-40 text-3xl text-center">
        <p>
          <span class="line line-1"></span><br />
          This line's animation will begin when it enters the viewport and
          finish when its top edge hits the top of the viewport, staying
          perfectly in sync with the scrollbar because it has
          <code>scrub:&nbsp;true</code>
        </p>
        <div class="number"></div>
      </section>
      <div class="section relative">
        <div
          class="absolute inset-0 w-full h-full -z-1 bg-cover bg bg-center bg-no-repeat"
          :style="{
            backgroundImage: 'url(' + require('~/assets/k2.jpg') + ')',
          }"
        >
          <h1
            class="text-6xl text-center uppercase text-yellow-100 font-bold p-20"
          >
            another parallax porrem
          </h1>
        </div>
      </div>
      <section class="panel bg-orange-400 orange">
        <p>
          <span class="line line-2"></span>This orange panel gets pinned when
          its top edge hits the top of the viewport, then the line's animation
          is linked with the scroll position until it has traveled 100% of the
          viewport's height (<code>end: "+=100%"</code>), then the orange panel
          is unpinned and normal scrolling resumes. Padding is added
          automatically to push the rest of the content down so that it catches
          up with the scroll when it unpins. You can set
          <code>pinSpacing: false</code> to prevent that if you prefer.
        </p>
      </section>

      <section class="panel bg-purple-400 purple p-10">
        <div class="bg-blue-400 w-full h-10 square relative"></div>

        <p v-if="purpleText === 0" class="p-10">
          <span class="line line-3"></span>This panel gets pinned in a similar
          way, and has a more involved animation thasadaskjdahskde line, all
          synced with the scroll position perfectly.
        </p>

        <p v-if="purpleText === 1" class="p-10">
          <span class="line line-3"></span>Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Esse, doloribus debitis recusandae saepe
          quis minus sapiente nisi voluptate dolorem? Quae error provident
          itaque temporibus repudiandae deserunt rem cum. Sint, aspernatur!
        </p>

        <p v-if="purpleText === 2" class="p-10">
          <span class="line line-3"></span>3093409853409853904580495809
        </p>
      </section>
      <div class="section relative">
        <div
          class="absolute inset-0 w-full h-full -z-1 bg-cover bg bg-center bg-no-repeat"
          :style="{
            backgroundImage: 'url(' + require('~/assets/k3.jpg') + ')',
          }"
        >
          <h1
            class="text-6xl text-center uppercase text-blue-400 font-bold p-20"
          >
            Blabla parallax porrem
          </h1>
        </div>
      </div>
      <section class="panel bg-yellow-400 yellow p-10">
        <div class="bg-yellow-400 w-full h-10 square relative"></div>

        <p class="p-10 testArray">
          <span></span>This panel gets pinned in a similar way, and has a more
          involved animation thasadaskjdahskde line, all synced with the scroll
          position perfectly.
        </p>

        <p class="p-10 testArray">
          <span></span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Esse, doloribus debitis recusandae saepe quis minus sapiente nisi
          voluptate dolorem? Quae error provident itaque temporibus repudiandae
          deserunt rem cum. Sint, aspernatur!
        </p>

        <p class="p-10 testArray"><span></span>3093409853409853904580495809</p>
      </section>

      <section class="panel gray">DONE!</section>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default {
  name: 'Home',
  transition: 'home',

  data() {
    return {
      purpleText: 0,
      loading: true,
      yellowText: true,
      vid:
        'https://res.cloudinary.com/grountish/video/upload/v1607989129/acd_wj1h23.mp4',
    }
  },

  methods: {
    initAnimation() {
      gsap.registerPlugin(ScrollTrigger)

      gsap.utils.toArray('.section').forEach((section, i) => {
        section.bg = section.querySelector('.bg')

        // Give the backgrounds some random images

        // Do the parallax effect on each section
        if (i) {
          gsap.to(section.bg, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: true,
            },
          })
        }

        // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
        else {
          section.bg.style.backgroundPosition = '50% 0px'

          gsap.to(section.bg, {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
      })

      gsap.from('.heading', {
        opacity: 0,
        y: '+=50',
        delay: 2,
        duration: 1,
      })

      gsap.to('.pink', {
        scrollTrigger: {
          trigger: '.pink',
          pin: true,
          scrub: true,
          end: '+=200%',
        },
        backgroundColor: '#000',
      })
      gsap.to('.textPink', {
        scrollTrigger: {
          trigger: '.textPink',
          scrub: true,
          start: 'top top',
        },
        y: '-=120%',
        opacity: 1,
      })
      gsap.from('.graph', {
        scrollTrigger: {
          trigger: '.graph',
          // scrub:true,
        },
        opacity: 0,
        y: '+=50',
        scale: 0.7,
        duration: 1,
      })

      // --- RED PANEL ---
      gsap.from('.line-1', {
        scrollTrigger: {
          trigger: '.line-1',
          scrub: true,
          start: 'top bottom',
          end: 'top top',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })

      // --- ORANGE PANEL ---
      gsap.from('.line-2', {
        scrollTrigger: {
          trigger: '.orange',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=100%',
        },
        scaleX: 0,
        autoAlpha: 0,
        transformOrigin: 'left center',
        ease: 'none',
      })
      gsap.from('.number', {
        scrollTrigger: {
          trigger: '.red',
          onEnter: () =>
            document
              .querySelector('.number')
              .style.setProperty('--percent', 1.234),
          start: 'center center',
        },
        opacity: 0,
        scale: 0.4,
        transformOrigin: 'center left',
      })

      // --- PURPLE/GREEN PANEL ---
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.purple',

          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=400%',
          onUpdate: (self) => {
            return self.progress > 0.3 && self.progress < 0.6
              ? (this.purpleText = 1)
              : self.progress > 0.6
              ? (this.purpleText = 2)
              : (this.purpleText = 0)
          },
        },
      })

      tl.from('.square', {
        scale: 0.3,
        autoAlpha: 0,
        ease: 'power2',
      })
        .from(
          '.line-3',
          { scaleX: 0, transformOrigin: 'left center', ease: 'none' },
          0
        )
        .to('.square', { backgroundColor: '#28a92b' }, 0)

      gsap.from('.yellow', {
        scrollTrigger: {
          trigger: '.yellow',
          scrub: true,
          pin: true,
          start: 'top top',
          end: '+=400%',
        },
      })
      gsap.utils.toArray('.testArray').forEach((el, index) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            toggleActions: 'play reset resume reset',
            scrub: true,
            end: '+=250%',
          },
        })

        tl.set(el, { transformOrigin: 'center center' }).fromTo(
          el,
          { opacity: 0 },
          { opacity: 1, scale: 1, y: '-=10', immediateRender: true }
        )
      })
    },
  },

  mounted() {
    this.initAnimation()
  },
}
</script>
<style scoped>
section,
.section {
  height: 100vh;
}
.line {
  width: 100%;
  max-width: 800px;
  height: 8px;
  margin: 0 0 10px 0;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 1);
}
.square {
  width: 100%;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

@property --percent {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}
@property --temp {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}
@property --v1 {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --v2 {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
.number {
  font: 800 40px monospace;
  padding: 2rem;
  transition: --percent 4s;
  --temp: calc(var(--percent) * 100);
  --v1: max(var(--temp) - 0.5, 0);
  --v2: max((var(--temp) - var(--v1)) * 100 - 0.5, 0);
  counter-reset: v1 var(--v1) v2 var(--v2);
}

.number::before {
  content: counter(v1) '.' counter(v2) '%';
}
.highcharts-series {
  transform: scale(0.1);
}
</style>
