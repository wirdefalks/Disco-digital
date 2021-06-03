export default {
  methods: {
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelector(
        '[data-character-id="' + characterIndex + '"]'
      );
      let p = characterInfoElement.previousElementSibling;
      if (characterInfoElement.classList.contains("block")) {
        characterInfoElement.classList.replace("block", "hidden");
        p.classList.replace("hideI", "showI");
      } else {
        characterInfoElement.classList.replace("hidden", "block");
        p.classList.replace("showI", "hideI");
      }
    },
    toggleAccordion(action) {
      
      let accordions = document.querySelectorAll(".accordion");
      action === "+" ?
        [...accordions].forEach((x) => {
          x.classList.remove("hidden");
          x.previousElementSibling.classList.replace("showI", "hideI");
        }) :
        [...accordions].forEach((x) => {
          x.classList.add("hidden");
          x.previousElementSibling.classList.replace("hideI", "showI");
        });
    },
    returnDate: (a) => new Date(a).toLocaleString("sv-SE").split(" ")[0],
  },
  returnTags(tags) {
    let a = [],
      b = [],
      c = [];
    tags.forEach((x) => {
      if (x.value == "Tag1" || x.value == "Tag2") {
        a.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
      if (x.value == "react" || x.value == "tag4") {
        b.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
      if (x.value == "tag5" || x.value == "tag6") {
        c.push(
          `<span class="text-back"> [</span>
<span class=" text-PrimaryGreen">` +
            x.value +
            '</span> <span class="text-back">]</span>'
        );
      }
    });
    return `<div class="grid"> <h4>Level : ${a}</h4>  <h4>I am a: ${b}</h4>  <h4>University: ${c}</h4> </div>`;
  },
};


