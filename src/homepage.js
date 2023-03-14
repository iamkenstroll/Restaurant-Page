const content = document.querySelector("#content");

function createHomepage() {
  content.innerHTML = "";
  const image = document.createElement("img");
  image.src = "../dist/restaurant-image.jpg";
  image.alt = "Restaurant image";
  content.appendChild(image);

  const headline = document.createElement("h1");
  headline.classList.add("welcome");
  headline.textContent = "Welcome to Gizzo Restaurant";
  content.appendChild(headline);

  const copy = document.createElement("p");
  copy.textContent =
    "We are a family-owned restaurant that has been serving delicious meals for over 20 years. Our menu features variety of dishes made with fresh, locally-sourced incredients. Come visit us today and experience the magic of our restaurant.";
  content.appendChild(copy);
}

export default createHomepage;
