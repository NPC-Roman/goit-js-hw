// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

const container = document.querySelector('.gallery');
console.log(container);

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a> </li>`;
    })
    .join('');
}
createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250 });
