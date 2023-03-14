function createMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuItems = [
    { name: "Burger", price: "$10.99" },
    { name: "Pizza", price: "$12.99" },
    { name: "Salad", price: "$8.99" },
    { name: "Sandwich", price: "$7.99" },
  ];

  const menu = document.createElement("div");
  menu.classList.add("tab");
  content.appendChild(menu);

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our Menu";
  menu.appendChild(menuTitle);

  const menuList = document.createElement("ul");
  menu.appendChild(menuList);

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement("li");
    menuItem.textContent = `${menuItems[i].name} - ${menuItems[i].price}`;
    menuList.appendChild(menuItem);
  }
}

export { createMenu };
