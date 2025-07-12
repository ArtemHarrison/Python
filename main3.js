const carsData = [
  {
    type: "sedan",
    model: "Haval M6",
    km: 140000,
    price: 19582,
    img: "https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/haval-m6__3248681-1024x768x90.webp",
    link: "https://auto.ria.com/uk/newauto/auto-haval-m6-2024871.html"
  },
  {
    type: "suv",
    model: "Ford Focus",
    km: 180000,
    price: 7500,
    img: "https://cdn3.riastatic.com/photosnew/auto/photo/ford_focus__558823243fx.webp",
    link: "https://auto.ria.com/uk/auto_ford_focus_38546718.html"
  }
];

function createCard(car) {
  return `
    <div class="car-card" onclick="window.open('${car.link}', '_blank')">
      <img src="${car.img}" alt="${car.model}">
      <p><strong>Модель:</strong> ${car.model}</p>
      <p><strong>Тип:</strong> ${car.type}</p>
      <p><strong>Пробіг:</strong> ${car.km.toLocaleString()} км</p>
      <p class="price">${car.price.toLocaleString()} $</p>
    </div>`;
}

function renderGallery(filter = "all") {
  const gallery = document.getElementById("car-gallery");
  gallery.innerHTML = carsData
    .filter(car => filter === "all" || car.type === filter)
    .map(createCard)
    .join("");
}

renderGallery();
