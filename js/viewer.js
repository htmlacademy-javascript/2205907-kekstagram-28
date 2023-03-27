import './data.js';
import {otherUsersPhoto} from './render.js';
import './render.js';

const fullSizeView = document.querySelector('.big-picture');
const backToAllView = document.querySelector('.big-picture__cancel');
const fullViewImg = document.querySelector('.big-picture__img');
const currentViewedImage = fullViewImg.querySelector('img');
const currentLikesNumber = document.querySelector('.likes-count');
const currentCommentNumber = document.querySelector('.comments-count');
const currentPhotoCommentsNumber = document.querySelectorAll('.social__comment');
const currentPhotoCommentsList = document.querySelector('.social__comments');
const commentAvatar = currentPhotoCommentsList.querySelector('.social__picture');
const commentText = currentPhotoCommentsList.querySelector('.social__text');
const photoDescription = document.querySelector('.social__caption');
const photos = document.querySelectorAll('.picture');

for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener('click', (evt) => {
    evt.preventDefault();

    fullSizeView.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');

    currentViewedImage.src = otherUsersPhoto[i].url;
    currentLikesNumber.textContent = otherUsersPhoto[i].likes;
    currentCommentNumber.textContent = currentPhotoCommentsNumber.length;
    commentAvatar.src = otherUsersPhoto[i].comments.avatar;
    commentAvatar.alt = otherUsersPhoto[i].comments.name;
    commentText.textContent = otherUsersPhoto[i].comments.message;
    photoDescription.textContent = otherUsersPhoto[i].description;
  });
}

backToAllView.addEventListener('click' , () => {
  fullSizeView.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    fullSizeView.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
