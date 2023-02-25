import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__link" href= "${original}">
    <img
      class= "gallery__image"
      src= "${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>`;
    })
    .join("");
}

console.log(galleryItems);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const turgetSource = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
   <img src="${turgetSource}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEskKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEskKeyPress);
      },
    }
  );
  function onEskKeyPress(event) {
    const ESK_KEY_CODE = "Escape";
    if (event.code === ESK_KEY_CODE) {
      instance.close();
    }
  }

  console.log(instance);
  instance.show();
}

// function onOpenModal() {
//   if (instance.show())
//     window.addEventListener('keydown', onEskKeyPress);
// }

// function onCloseModal() {
//   if (instance.close()) {
//     window.removeEventListener('keydown', onEskKeyPress);
//   };
// }
