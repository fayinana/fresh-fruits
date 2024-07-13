const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

const dateDOM = document.querySelector("#date");
const date = new Date();

dateDOM.innerHTML = date.getFullYear();

menu.addEventListener("click", () => {
  links.style.display = "flex";
});

close.addEventListener("click", () => {
  links.style.display = "none";
});
const navbar = document.querySelector("nav");
const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollLinks.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
