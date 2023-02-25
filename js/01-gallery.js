import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
const galleryMarkup = createGalleryMarkup(galleryItems);




galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup (items){
    
    return galleryItems.map(({ preview, original, description }) => {
        return ` <a class="gallery__link" href= "${original}">
    <img
      class= "gallery__image"
      src= "${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>`;
    }).join('');
}


console.log(galleryItems);



 galleryContainer.addEventListener('clikc', onGalleryContainerClikc);

function onGalleryContainerClikc(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  };

  const turgetSource = event.target.dataset.source;
  const instance = basicLightbox.create(`
   <img src="${turgetSource}" width="800" height="600">
`);

 instance.show();
}

