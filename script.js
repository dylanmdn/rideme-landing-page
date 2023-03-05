const hamburgerIcon = document.querySelector("#hamburger-icon");
const navLinks = document.querySelector("#nav-links");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show-bar");
});

const reviews = document.querySelectorAll(
  "#santorini-reviews, #roma-reviews, #sydney-reviews, #kuala-lampur-reviews"
);
const reviewsTitles = document.querySelectorAll(
  "#santorini, #roma,#kuala-lampur,#sydney"
);

let index = 0;

reviewsTitles.forEach((title) => {
  title.addEventListener("click", (token, newToken) => {
    if (title.children.item(0).classList.contains("active")) {
      return;
    } else {
      title.children.item(0).classList.add("active");
      title.children.item(0).classList.add("md:relative");
      title.children.item(0).classList.add("md:w-full");
      title.children.item(0).classList.add("md:bg-black");
      title.children.item(0).classList.add("md:h-[1px]");
    }

    index = title.getAttribute("data-reviews");
    console.log(index);

    for (let i = 0; i < reviewsTitles.length; i++) {
      if (reviewsTitles[i].getAttribute("data-reviews") !== index) {
        reviewsTitles[i].children.item(0).classList.remove("active");
        reviewsTitles[i].children.item(0).classList.remove("md:relative");
        reviewsTitles[i].children.item(0).classList.remove("md:w-full");
        reviewsTitles[i].children.item(0).classList.remove("md:bg-black");
        reviewsTitles[i].children.item(0).classList.remove("md:h-[1px]");
      }
    }

    for (let j = 0; j < reviews.length; j++) {
      if (reviews[j].getAttribute("data-reviews") === index) {
        reviews[j].classList.remove("md:opacity-0");
        reviews[j].classList.add("md:opacity-100");
      } else {
        reviews[j].classList.remove("md:opacity-100");
        reviews[j].classList.add("md:opacity-0");
      }
    }
  });
});
