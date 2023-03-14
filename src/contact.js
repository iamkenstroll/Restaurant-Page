function createContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const contact = document.createElement("div");
  contact.classList.add("tab");
  content.appendChild(contact);

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";
  contact.appendChild(contactTitle);

  const contactInfo = document.createElement("p");
  contactInfo.innerHTML =
    "Address: 123 Main Street<br>Phone: (555) 555-5555<br>Email: info@gizzorestaurant.com";
  contact.appendChild(contactInfo);
}

export { createContact };
