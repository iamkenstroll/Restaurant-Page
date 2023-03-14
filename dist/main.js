(()=>{"use strict";const e=document.querySelector("#content"),t=function(){e.innerHTML="";const t=document.createElement("img");t.src="../dist/restaurant-image.jpg",t.alt="Restaurant image",e.appendChild(t);const n=document.createElement("h1");n.classList.add("welcome"),n.textContent="Welcome to Gizzo Restaurant",e.appendChild(n);const c=document.createElement("p");c.textContent="We are a family-owned restaurant that has been serving delicious meals for over 20 years. Our menu features variety of dishes made with fresh, locally-sourced incredients. Come visit us today and experience the magic of our restaurant.",e.appendChild(c)},n=document.querySelector("#content");t();const c=document.createElement("Button");c.classList.add("btn"),c.textContent="Home",c.addEventListener("click",t);const a=document.createElement("button");a.classList.add("btn"),a.textContent="Menu",a.addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=[{name:"Burger",price:"$10.99"},{name:"Pizza",price:"$12.99"},{name:"Salad",price:"$8.99"},{name:"Sandwich",price:"$7.99"}],n=document.createElement("div");n.classList.add("tab"),e.appendChild(n);const c=document.createElement("h1");c.textContent="Our Menu",n.appendChild(c);const a=document.createElement("ul");n.appendChild(a);for(let e=0;e<t.length;e++){const n=document.createElement("li");n.textContent=`${t[e].name} - ${t[e].price}`,a.appendChild(n)}}));const o=document.createElement("button");o.classList.add("btn"),o.textContent="Contact",o.addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.classList.add("tab"),e.appendChild(t);const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const c=document.createElement("p");c.innerHTML="Address: 123 Main Street<br>Phone: (555) 555-5555<br>Email: info@gizzorestaurant.com",t.appendChild(c)}));const d=document.createElement("div");d.classList.add("tabs"),d.appendChild(c),d.appendChild(a),d.appendChild(o),document.body.insertBefore(d,n)})();