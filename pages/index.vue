<template>
  <div class="grid mb-4">
    <div class="flex flex-col justify-start bg-ContainerGray">
      <div class="p-10 text-center">
        <h1 class="text-5xl text-left font-extrabold">Valkommen!</h1>
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          expedita pariatur quia quos non reiciendis omnis vitae id? Pariatur,
          provident consequatur! Ducimus vero accusamus nemo, debitis facere qui
          unde rerum.
        </p>
        <ToggleAccordion />
        <!-- <div class="text-right">
          <button
            @click="toggleAccordion('-')"
            class="m-3 px-5 rounded-md bg-PrimaryGreen"
          >
            - minifcare alla
          </button>
          <button
            @click="toggleAccordion('+')"
            class="m-3 px-5 rounded-md bg-PrimaryGreen"
          >
            + expande alla
          </button>
        </div> -->

        <div
          class="flex flex-col w-full text-left mt-5 space-y-3 text-PrimaryGreen"
        >
          <div v-for="(category, index) in categories" :key="category._id">
            <p
              class="text-PrimaryGreen py-2 cursor-pointer ml-0 showI font-bold border-t border-black"
              @click="characterItemClick(index)"
            >
              <!-- {{ accordionIndex == index && !toggled ? "-" : "+" }} -->
              <!-- <span v-if="accordionIndex == index && toggled"> - </span>
              <span v-else> + </span> -->
              <!-- {{toggledInd(index)}} -->
              {{ category.title }}
            </p>
            <div
              :data-character-id="index"
              class="space-y-4 hidden ml-3 accordion"
            >
              <div
                v-for="subcategory in category.subcategory"
                :key="subcategory._id"
              >
                <NuxtLink :to="'/subcategory/' + subcategory.slug.current">
                  {{ subcategory.id }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="flex flex-col justify-start grid-cols-1 bg-ContainerGray mt-10">
      <div class="p-10 space-y-4">
        <p>Disco Digitalis semans skapte hit!</p>
        <div class="text-PrimaryGreen flex">
          <h3>HKR Play</h3>
          <span class="text-black mx-2">| </span>
          <h3>Arbeta smet aktja</h3>
        </div>

        <h1 class="text-5xl text-left font-extrabold">Badda in Film</h1>
        <p class="text-gray-500">23/12/2020 av Åsa K</p>
        <div class="text-right">
          <button class="m-3 px-5 rounded-md bg-PrimaryGreen">Skry ut</button>
        </div>
        <img src="https://via.placeholder.com/850x400" alt="" />
        <ol class="space-y-4">
          <li>
            <h2 class="text-2xl my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <p class="text-left">
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita pariatur
            </p>
            <p class="text-left">
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita
            </p>
            <p class="text-left">
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita sit amet consectetur adipisicing elit. Ratione
              expedita
            </p>
            <p class="text-left">
              4. Lorem ipsum dolor srem ipsum dolor srem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione expedita
            </p>
          </li>
          <li></li>
          <li>
            <h2 class="text-2xl my-2">Lorem ipssicing elit.</h2>
            <p class="text-left">
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita pariatur
            </p>
            <p class="text-left">
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita
            </p>
            <p class="text-left">
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione expedita sit amet consectetur adipisicing elit. Ratione
              expedita
            </p>
            <p class="text-left">
              4. Lorem ipsum dolor srem ipsum dolor srem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione expedita
            </p>
          </li>
        </ol>
        <img src="https://via.placeholder.com/850x400" alt="" />
        <p>[target group(s)]</p>
        <p>[skill level]</p>
        <strong>[Produced by Lorem Impsueme]</strong>
        <div class="flex text-PrimaryGreen">
          <p>Tag1</p>
          <span class="mx-2">| </span> Tag2
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import minMax from "../mixins/minMax";
// call to all the posts with type == category
// on the response we get categories with titles and subcategories
// []->{} = this syntax allows to iterate through an array,
// and bring a specific property. Label in this case

const query = groq`{'categories': *[_type=="category"]{
  ..., 
  subcategory[]->{
   ...
  }
}, 'lastPost': *[_type == "post"] | order(_createdAt asc)[0]{
  ...,
  author->{name},
}}`;

export default {
  async asyncData({ $sanity }) {
    return await $sanity.fetch(query);
  },
  mixins: [ minMax ],
};
</script>
<style>
.showI::before {
  content: "+";
}
.hideI::before {
  content: "-";
}
</style>