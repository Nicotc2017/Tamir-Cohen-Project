function phonenav() {
  const navbarLinks = document.getElementById("navbar-links");
  if (navbarLinks.style.display === "flex") {
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.style.display = "flex";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const iconNav = document.querySelector(".icon-nav");

  iconNav.addEventListener("click", function () {
    menu.classList.toggle("show");
    iconNav.classList.toggle("open");
  });
});
