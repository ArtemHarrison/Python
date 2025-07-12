const yearSelect = document.getElementById("year");

for (let year = new Date().getFullYear(); year >= 1990; year--) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

document.getElementById("carForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const brand = document.getElementById("brand").value;
  const type = document.getElementById("type").value;
  const year = document.getElementById("year").value;
  const km = document.getElementById("km").value;
  const phone = document.getElementById("phone").value;
  const price = document.getElementById("price").value;

  alert(`Ваше авто виставлено на продаж:
${brand}, тип: ${type}, ${year} рік, пробіг: ${km} км, ціна: $${price}.
Ми з вами звʼяжемося за номером ${phone}.`);
});
