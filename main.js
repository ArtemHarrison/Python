document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
  });
});

function selectCarType(type) {
  const gallery = document.getElementById('car-gallery');
  const images = {
    sedan: ['/cars/sedan1.jpg', '/cars/sedan2.jpg'],
    suv: ['/cars/suv1.jpg', '/cars/suv2.jpg'],
    hatchback: ['/cars/hatch1.jpg', '/cars/hatch2.jpg']
  };

  gallery.innerHTML = '';
  images[type].forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = type;
    gallery.appendChild(img);
  });
}
