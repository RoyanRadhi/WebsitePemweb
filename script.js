const img = document.getElementById('gambar');
const button = document.getElementById('toggleButton');

img.addEventListener('click', toggleBlur);

function toggleBlur() {
  img.classList.toggle('blur');
}
