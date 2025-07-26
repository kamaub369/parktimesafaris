
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const scheduledContainer = document.querySelector(".tours-container");


  fetch("data/tours.json")
    .then((res) => res.json())
    .then((tours) => {
      tours.forEach((tour) => {
        const card = document.createElement("div");
        card.className = "tour-card";

        card.innerHTML = `
          <img src="${tour.image}" alt="${tour.title}" />
          <h3>${tour.title}</h3>
          <p>${tour.description}</p>
          <div class="price">${tour.price}</div>
          <button class="book-btn">Book Now</button>
        `;

        scheduledContainer.appendChild(card);
      });
    })
    .catch((err) => {
      scheduledContainer.innerHTML = "<p>Failed to load tours.</p>";
      console.error("Error loading tours:", err);
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Mobile dropdown toggle
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("open");
      }
    });
  });
});
