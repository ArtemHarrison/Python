const carsData = [
  {
    type: "sedan",
    model: "BMW M4",
    km: 75000,
    price: 53900,
    img: "https://cdn1.riastatic.com/photosnew/auto/photo/bmw_m4__596253261fx.webp",
    link: "https://auto.ria.com/uk/auto_bmw_m4_38183276.html" 
  },
  {
    type: "suv",
    model: "Mercedes-Maybach GLS",
    km: 100000,
    price: 76777,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-maybach-gls-600-140-684896af6131c.jpg",
    link: "https://auto.ria.com/uk/auto_mercedes-benz_gls-class_38151585.html"
  },
  {
    type: "sedan",
    model: "Toyota Camry",
    km: 200000,
    price: 42596,
    img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM_03a_24:Large-Landscape?ts=1730888748169&resMode=sharp2",
    link: "https://auto.ria.com/uk/newauto/auto-toyota-camry-1999934.html" 
  },
  {
    type: "hatchback",
    model: "Volkswagen Golf",
    km: 120000,
    price: 30050,
    img: "https://hips.hearstapps.com/hmg-prod/images/06-2025-golf-gti-autobahn-kings-red-metallic-30-680b97f9352d2.jpg",
    link: "https://auto.ria.com/uk/newauto/auto-volkswagen-golf-2019161.html" 
  },
  {
    type: "suv",
    model: "Audi Q7",
    km: 85000,
    price: 30800,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-102-66edd2912544c.jpg",
    link: "https://auto.ria.com/uk/auto_audi_q7_38358176.html" 
  }
];

function createCard(car) {
  return `
    <article class="car-card" data-type="${car.type}" onclick="window.open('${car.link}', '_blank')">
      <img src="${car.img}" alt="${car.model}">
      <p><strong>Модель:</strong> ${car.model}</p>
      <p><strong>Тип:</strong> ${car.type}</p>
      <p><strong>Пробіг:</strong> ${car.km.toLocaleString()} км</p>
      <p class="price">${car.price.toLocaleString()} $</p>
    </article>
  `;
}

function renderGallery(filter = "all") {
  const gallery = document.getElementById("car-gallery");
  gallery.innerHTML = carsData
    .filter(car => filter === "all" || car.type === filter)
    .map(createCard)
    .join("");
}

renderGallery();
