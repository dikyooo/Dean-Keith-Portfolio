const sections = document.querySelectorAll("#HOME, #ABOUT, #CONTACT, #OTHER");

const navLinks = document.querySelectorAll(".navlink ul li a");

window.addEventListener("scroll", function () {
  let current = "";

  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 10
  ) {
    current = "CONTACT";
  } else {
    for (let i = 0; i < sections.length; i++) {
      if (window.scrollY >= sections[i].offsetTop - 200) {
        current = sections[i].id;
      }
    }
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");

    if (navLinks[i].getAttribute("href") === "#" + current) {
      navLinks[i].classList.add("active");
    }
  }
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const profileImage = document.getElementById("profile-image");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.src = "images/icon/theme-light.png";
    profileImage.src = "images/profile/profile-light.png";
  } else {
    themeIcon.src = "images/icon/theme-dark.png";
    profileImage.src = "images/profile/profile-dark.png";
  }
});
