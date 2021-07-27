export default {
  methods: {
    copyLink(slug) {
      let link = "https://discodigital.netlify.app/singlepost/" + slug;
      navigator.clipboard.writeText(link);
      this.$toast.show("Link copied", {
        theme: "toasted-primary",
        position: "bottom-right",
        duration: 2000,
      });
    },
    characterItemClick(characterIndex) {
      const characterInfoElement = document.querySelector(
        '[data-character-id="' + characterIndex + '"]'
      );
      let p = characterInfoElement.previousElementSibling;
      characterInfoElement.classList.toggle("active");
      if (characterInfoElement.style.maxHeight) {
        characterInfoElement.style.maxHeight = null;
        p.classList.replace("hideI", "showI");
      } else {
        characterInfoElement.style.maxHeight =
          characterInfoElement.scrollHeight + 20 + "px";
        p.classList.replace("showI", "hideI");
      }
    },
    toggleAccordion(action) {
      let accordions = document.querySelectorAll(".accordiong");

      action === "-"
        ? [...accordions].forEach((x) => {
            x.classList.toggle("active");
            let p = x.previousElementSibling;
            if (x.style.maxHeight) {
              x.style.maxHeight = null;
              p.classList.replace("hideI", "showI");
            }
          })
        : [...accordions].forEach((x) => {
            let p = x.previousElementSibling;
            x.style.maxHeight = x.scrollHeight + 20 + "px";
            p.classList.replace("showI", "hideI");
          });
    },
    returnDate: (a) => new Date(a).toLocaleString("sv-SE").split(" ")[0],
  },
};
