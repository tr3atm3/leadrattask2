const adminLink = document.querySelector(".admin-link");
const userLink = document.querySelector(".user-link");
const adminContainer = document.querySelector(".admin-link-checkbox-container");
const userContainer = document.querySelector(".user-link-checkbox-container");

adminLink.addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = "../images/checked.png";
  img.classList.add("custom-img");
  adminContainer.innerHTML = "";
  adminContainer.appendChild(img);
});
userLink.addEventListener("click", function () {
  const img = document.createElement("img");
  img.src = "../images/checked.png";
  img.classList.add("custom-img");
  userContainer.innerHTML = "";
  userContainer.appendChild(img);
});
