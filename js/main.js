const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-btn i");
const list = document.querySelector(".list");

const servicesCards = document.querySelector(".services-cards");
menuBtn.addEventListener("click", () => {
  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x-circle");
    list.classList.add("show");
  } else {
    menuIcon.classList.remove("bx-x-circle");
    menuIcon.classList.add("bx-menu");
    list.classList.remove("show");
  }
});

function getServecesCards(el) {
  return ` <div class="card">
            <img src=${el.img} alt="Search" />
            <h3>${el.title}</h3>
            <p>
            ${el.description}
            </p>
          </div>`;
}

services.map((el) => {
  servicesCards.innerHTML += getServecesCards(el);
});
