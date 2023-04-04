const imgUpload = document.querySelector('#upload-file');
const uploadModal = document.querySelector('.img-upload__overlay');
const imgPreview = document.querySelector('.img-upload__preview');
const closeUploadForm = document.querySelector('#upload-cancel');
const hashtagWrapper = document.querySelector('.img-upload__field-wrapper');
const hashtagInput = hashtagWrapper.querySelector('input');
const commentWrapper = document.querySelector('.comment-text__field-wrapper');
const commentInput = commentWrapper.querySelector('textarea');
const uploadPhotoForm = document.querySelector('#upload-select-image');

imgUpload.addEventListener('change', (evt) => {
  evt.preventDefault();

  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imgPreview.querySelector('img').src = imgUpload.src;
});

closeUploadForm.addEventListener('click' , () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    uploadModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});

document.addEventListener('keydown', (evt) => {
  evt.preventDefault();

  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


//Валидация
const pristineComment = new Pristine(document.querySelector('.img-upload__form'), {
  classTo: 'text__description', // Элемент, на который будут добавляться классы
  errorClass: 'text__description--invalid', // Класс, обозначающий невалидное поле
  successClass: 'text__description--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'comment-text__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'text__description__error' // Класс для элемента с текстом ошибки
});

function validateComment (value) {
  return value.length <= 140;
}

pristineComment.addValidator(uploadPhotoForm.querySelector('.text__description'), validateComment);


uploadPhotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristineComment.validate();
});
