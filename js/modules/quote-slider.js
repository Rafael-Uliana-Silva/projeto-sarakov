export default function initQuoteSlider() {

  const quotes = document.querySelectorAll("[data-quote]")

  function quoteSlider() {
    for(let i = 0; i < 4; i++) {
      setTimeout(() => {
        quotes[i].classList.add("ativo")
      }, 4000 * i);
    };

    setInterval(() => {
      quotes.forEach((quote) => {
        quote.classList.remove("ativo")
      });
    }, 4000);
  };
   setInterval(() => { quoteSlider() }, 16000)
};
