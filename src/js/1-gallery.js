import { images } from './images';

const galleryContainer = document.querySelector(".gallery");

function createMarkUp(images) {
  return images
    .map(
      ({ preview, original, description }) => `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
galleryContainer.innerHTML = createMarkUp(images);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

