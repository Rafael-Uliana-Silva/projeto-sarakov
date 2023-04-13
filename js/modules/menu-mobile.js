import outsideClick from './outside-click.js';

export default function initMenuMobile() {

const menuBtn = document.querySelector("[data-menu='button']");
const menuList = document.querySelector("[data-menu='list']");
const eventos = ["click", "touchstart"];  

function openMenu(event) {
  menuList.classList.add("active");
  menuBtn.classList.add("active");
  outsideClick(menuList, eventos, () => {
    menuList.classList.remove("active");
    menuBtn.classList.remove("active");
  })
}

eventos.forEach((evento) => {
  menuBtn.addEventListener(evento, openMenu);
})

}