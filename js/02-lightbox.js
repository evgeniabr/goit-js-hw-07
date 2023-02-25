import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__link" href= "${original}">
    <img
      class= "gallery__image"
      src= "${preview}"
      alt= "${description}"
    />
  </a>`;
    })
    .join("");
}




    const lightbox = new SimpleLightbox('.gallery__link', {captionsData:'alt', captionDelay: 250 });

console.log(galleryItems);
