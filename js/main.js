const AVATAR_NAMES = [
  'Bob',
  'Alexandra',
  'Eleonora',
  'Tanya',
  'Maria',
];

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


// Function creates random number from set range
const GET_RANDOM_INTEGER = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Function return path URL yse to access PHOTOS (photo folder) by name that is number randomly generated
const URL_GENERATOR_FOR_PHOTO = function (format) {
  return function (Number) {
    return `photos/${Number}.${format}`;
  };
};

const JPG_GENERATOR = URL_GENERATOR_FOR_PHOTO('jpg'); // As there are 25 photos existed

//Function return path URL yse to access PHOTOS (photo folder) by name that is number randomly generated
const URL_GENERATOR_FOR_AVATAR = function (format) {
  return function (Number) {
    return `img/avatar-${Number}.${format}`;
  };
};

const SVG_GENERATOR = URL_GENERATOR_FOR_AVATAR('svg');// As there are 6 avatar existed

//Function creates an object with necessary data
let currentNumber = 0;
const getPhotoInfo = function () {
  currentNumber += 1;
  const CURRENT_ID = currentNumber;
  const RANDOM_NAME_INDEX = GET_RANDOM_INTEGER(0, AVATAR_NAMES.length - 1);
  const RANDOM_COMMENT_INDEX = GET_RANDOM_INTEGER(0, COMMENTS_TEXT.length - 1);

  return {
    id: CURRENT_ID,
    url: JPG_GENERATOR(CURRENT_ID),
    description: 'Хорошее фото',
    likes: GET_RANDOM_INTEGER(15, 200),
    comments: {
      id: GET_RANDOM_INTEGER(1, 1000),
      avatar: SVG_GENERATOR(GET_RANDOM_INTEGER(1, 6)),
      message: COMMENTS_TEXT[RANDOM_COMMENT_INDEX],
      name: AVATAR_NAMES[RANDOM_NAME_INDEX],
    },
  };
};

// getPhotoInfo();
const SEVERAL_PHOTOS_DATA = Array.from({length: 25}, getPhotoInfo);
//Можно вызывать SEVERAL_PHOTOS_DATA через console.log(SEVERAL_PHOTOS_DATA);
// console.log(SEVERAL_PHOTOS_DATA);
