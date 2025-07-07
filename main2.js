const carsData = [
  {
    type: "sedan",
    model: "BMW M4",
    km: 75000,
    price: 80000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m4-coupe-front-three-quarters-motion-65b935ea5dde6.jpg?crop=0.888xw:0.752xh;0.0881xw,0.0865xh&resize=2048:*",
  },
  {
    type: "suv",
    model: "Mercedes‑Maybach GLS",
    km: 100000,
    price: 90000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-maybach-gls-600-140-684896af6131c.jpg?crop=0.635xw:0.536xh;0.221xw,0.180xh&resize=1200:*",
  },
  {
    type: "sedan",
    model: "Toyota Camry",
    km: 200000,
    price: 20000,
    img: "https://scene7.toyota.eu/is/image/toyotaeurope/CAM_03a_24:Large-Landscape?ts=1730888748169&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
  },
  {
    type: "hatchback",
    model: "Volkswagen Golf",
    km: 120000,
    price: 12000,
    img: "https://hips.hearstapps.com/hmg-prod/images/06-2025-golf-gti-autobahn-kings-red-metallic-30-680b97f9352d2.jpg?crop=0.670xw:0.566xh;0.153xw,0.315xh&resize=2048:*",
  },
  {
    type: "suv",
    model: "Audi Q7",
    km: 85000,
    price: 45000,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-audi-q7-102-66edd2912544c.jpg?crop=0.616xw:0.461xh;0.206xw,0.404xh&resize=1200:*",
  },
];

function createCard(car) {
  return `<article class="car-card" data-type="${car.type}">
              <img src="${car.img}" alt="${car.model}">
              <p><strong>Модель:</strong> ${car.model}</p>
              <p><strong>Пробіг:</strong> ${car.km.toLocaleString()} км</p>
              <p class="price">${car.price.toLocaleString()} $</p>
            </article>`;
}

function renderGallery(filteredType = "all") {
  const gallery = document.getElementById("car-gallery");
  gallery.innerHTML = carsData
    .filter(
      (car) => filteredType === "all" || car.type === filteredType
    )
    .map(createCard)
    .join("");
}

function selectCarType(type) {
  renderGallery(type);
}

// First render all cars
renderGallery();
