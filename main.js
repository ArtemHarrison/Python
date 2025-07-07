
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const id = tab.getAttribute('data-tab');
      // Активна кнопка
      tabs.forEach(t => t.classList.toggle('active', t === tab));
      // Активний контент
      contents.forEach(c => c.classList.toggle('active', c.id === id));
    });
  });

  const cars = {
    sedan: [
      { src: "/cars/sedan1.jpg", alt: "Седан 1" },
      {
        src: "/cars/sedan2.jpg",
        alt: "Седан 2",
      },
    ],
    suv: [
      {
        src: "/cars/suv1.jpg",
        alt: "SUV 1",
      },
      {
        src: "/cars/suv2.jpg",
        alt: "SUV 2",
      },
    ],
    hatchback: [
      {
        src: "/cars/hatch1.jpg",
        alt: "Хетчбек 1",
      },
      {
        src: "/cars/hatch2.jpg",
        alt: "Хетчбек 2",
      },
    ],
  };

  function selectCarType(type) {
    const gallery = document.getElementById('car-gallery');
    gallery.innerHTML = '';
    cars[type].forEach(car => {
      const img = document.createElement('img');
      img.src = car.src;
      img.alt = car.alt;
      gallery.appendChild(img);
    });
  }