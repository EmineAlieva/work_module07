//для мобильного меню
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  body.classList.toggle("noscroll");
  renderPopup();
};

function renderPopup() {
  popup.appendChild(menu);
};

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  body.classList.remove("noscroll");
};

//для выделения активного раздела при клике
let sectionLinks = document.querySelectorAll('.nav_section li');

sectionLinks.forEach(v => {
  v.onclick = (() => {
    setTimeout(() => {
      sectionLinks.forEach(j => j.classList.remove('active_section'));
      v.classList.add('active_section')
    }, 300)
  })
});

//для отслеживания прокрутки
window.onscroll = (() => {
  let sections = document.querySelectorAll('#start, .section_content');
  sections.forEach((v,i) => {
    let rect = v.getBoundingClientRect().y;
    if(rect < window.innerHeight-200) {
      sectionLinks.forEach(v=> v.classList.remove('active_section'));
      sectionLinks[i].classList.add('active_section')
    }
  })
});
