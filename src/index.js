import createHomepage from "./homepage.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const content = document.querySelector("#content");
createHomepage();

const homeTab = document.createElement("Button");
homeTab.classList.add("btn");
homeTab.textContent = "Home";
homeTab.addEventListener("click", createHomepage);

const menuTab = document.createElement("button");
menuTab.classList.add("btn");
menuTab.textContent = "Menu";
menuTab.addEventListener("click", createMenu);

const contactTab = document.createElement("button");
contactTab.classList.add("btn");
contactTab.textContent = "Contact";
contactTab.addEventListener("click", createContact);

const tabs = document.createElement("div");
tabs.classList.add("tabs");
tabs.appendChild(homeTab);
tabs.appendChild(menuTab);
tabs.appendChild(contactTab);
document.body.insertBefore(tabs, content);
