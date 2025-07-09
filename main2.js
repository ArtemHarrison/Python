const carsData = [
  {
    type: "sedan",
    model: "BMW M4",
    km: 75000,
    price: 80000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m4-coupe-front-three-quarters-motion-65b935ea5dde6.jpg",
    link: "https://auto.ria.com/uk/search/?indexName=auto&brand.id[0]=9&model.id[0]=2030" 
  },
  {
    type: "suv",
    model: "Mercedes-Maybach GLS",
    km: 100000,
    price: 90000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-maybach-gls-600-140-684896af6131c.jpg",
    link: "https://auto.ria.com/uk/search/?indexName=auto&brand.id[0]=48&model.id[0]=2084"
  },
  {
    type: "sedan",
    model: "Toyota Camry",
    km: 200000,
    price: 20000,
    img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM_03a_24:Large-Landscape?ts=1730888748169&resMode=sharp2",
    link: "https://auto.ria.com/uk/search/?indexName=auto&brand.id[0]=79&model.id[0]=1426" 
  },
  {
    type: "hatchback",
    model: "Volkswagen Golf",
    km: 120000,
    price: 12000,
    img: "https://hips.hearstapps.com/hmg-prod/images/06-2025-golf-gti-autobahn-kings-red-metallic-30-680b97f9352d2.jpg",
    link: "https://auto.ria.com/uk/search/?indexName=auto&brand.id[0]=84&model.id[0]=1524" 
  },
  {
    type: "suv",
    model: "Audi Q7",
    km: 85000,
    price: 45000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-102-66edd2912544c.jpg",
    link: "https://auto.ria.com/uk/search/?indexName=auto&brand.id[0]=4&model.id[0]=913" 
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
