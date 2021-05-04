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
    returnDate: (a) => new Date(a).toLocaleString("en-EN"),
  },
};
