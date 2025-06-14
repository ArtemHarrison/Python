let cars = [];

let language = 'ua';
let currency = 'uah';

const imageLinks = {
  "Toyota-Camry-2020": "https://cdn0.riastatic.com/photosnew/auto/photo/toyota_camry__422480655f.jpg",
  "BMW-X5-2019": "https://cdn3.riastatic.com/photosnew/auto/photo/bmw_x5__475978683f.jpg",
  "Ford-Focus-2018": "https://titanshina.ua/upload/news/FordFocus2018.jpg"
};

document.getElementById("lang").addEventListener("change", e => {
  language = e.target.value;
  updateTexts();
});

document.getElementById("currency").addEventListener("change", e => {
  currency = e.target.value;
  renderCars();
});

document.getElementById("theme-btn").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
});

function updateTexts() {
  const texts = {
    ua: { title: "ExpressVykup", brand: "Марка авто", model: "Модель авто", year: "Рік авто" },
    en: { title: "ExpressVykup", brand: "Car brand", model: "Model", year: "Year" }
  };
  const t = texts[language];
  document.getElementById("title").textContent = t.title;
  document.getElementById("brand-input").placeholder = t.brand;
  document.getElementById("model-input").placeholder = t.model;
  document.getElementById("year-input").placeholder = t.year;
}

function convertCurrency(price) {
  const rates = { uah: 1, usd: 0.027, eur: 0.025 };
  const signs = { uah: '₴', usd: '$', eur: '€' };
  return Math.round(price * rates[currency]) + ' ' + signs[currency];
}

function renderCars(filtered = cars) {
  const container = document.getElementById("car-list");
  container.innerHTML = "";
  filtered.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.brand}">
      <h3>${car.brand} ${car.model}</h3>
      <p>${car.year} рік</p>
      <p>${convertCurrency(car.price)}</p>
    `;
    container.appendChild(card);
  });
}

function addCar() {
  const brand = document.getElementById("brand-input").value;
  const model = document.getElementById("model-input").value;
  const year = document.getElementById("year-input").value;

  if (!brand || !model || !year) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  const key = `${brand}-${model}-${year}`;
  const image = imageLinks[key] || "https://via.placeholder.com/200x120?text=No+Image";
  const price = 300000 + Math.floor(Math.random() * 500000);

  const single = document.createElement("div");
  single.className = "car-card";
  single.style.margin = "30px auto";
  single.style.maxWidth = "220px";
  single.innerHTML = `
    <img src="${image}" alt="${brand}">
    <h3>${brand} ${model}</h3>
    <p>${year} рік</p>
    <p>${convertCurrency(price)}</p>
  `;

  const output = document.getElementById("car-list");
  output.innerHTML = ""; // очищаємо старі
  output.appendChild(single); // додаємо нове

  cars.push({ brand, model, year, price, image });
}

updateTexts();
