// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

//#region Create gallery #
const GALLERY = document.querySelector('.gallery');
import { createGallery } from './rewnderMarkup.js';
GALLERY.insertAdjacentHTML('beforeend', createGallery(galleryItems));
//#endregion #

//#region SimpleLightbox
let gallery = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'title',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
//#endregion #

console.log(galleryItems);
