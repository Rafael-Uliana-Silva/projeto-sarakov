export default function initIntroAnime() {
  
  const sections = document.querySelectorAll("[data-anime]");

  if(sections.length) {
    function introAnime() {
      sections.forEach((section) => {
        section.classList.add("ativo-anime");
      });
    };
    introAnime();
    }
};
