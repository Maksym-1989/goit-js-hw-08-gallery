import gallery from "../gallery-items.js";

const galleryRef = document.querySelector("ul.gallery");
const containerModalRef = document.querySelector("div.lightbox");
const imgModalRef = document.querySelector(".lightbox__image");
const buttonCloseref = document.querySelector(".lightbox__button");

const liArray = gallery
  .map((imgUrl) => {
    return `<li class="gallery__item">
<a
  class="gallery__link"
  href="${imgUrl.original}"
>
  <img
    class="gallery__image"
    src="${imgUrl.preview}"
    data-source="${imgUrl.original}"
    alt="${imgUrl.description}"
  />
</a>
</li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", liArray);

galleryRef.addEventListener("click", galleryModalOpen);

buttonCloseref.addEventListener("click", galleryModalClose);

function galleryModalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    containerModalRef.classList.add("is-open");
    setAttributesValue(event.target.dataset.source, event.target.alt);
  }
  return;
}

function galleryModalClose(event) {
  containerModalRef.classList.remove("is-open");
  setAttributesValue();
}

function setAttributesValue(src = "", alt = "") {
  imgModalRef.src = src;
  imgModalRef.alt = alt;
}
