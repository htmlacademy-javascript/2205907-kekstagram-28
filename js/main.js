// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

// {
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }
// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

const avatarNames = [
  'Bob',
  'Alexandra',
  'Eleonora',
  'Tanya',
  'Maria',
];

const commentsText = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


// Function creates random number from set range
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  //НУЖНО СДЕЛАТЬ ЧТОБЫ ЦИФРЫ НЕ ПОВТОРЯЛИСЬ, НО Рандомные и неповторяющиеся - два принципиально несовместимых требования. Можно конечно заводить цикл проверки предыдущего числа с текущим, но это костыль какой-то
  return Math.floor(result);
};

const getRandomForPhotoId = getRandomInteger(1, 25);
const getRandomForCommentId = getRandomInteger(1, 100);
const getRandomForAvatarId = getRandomInteger(1, 6);
const getRandomLikeNumber = getRandomInteger(15, 200);

//Function return path URL yse to access PHOTOS (photo folder) by name that is number randomly generated
const urlGeneretorForPhoto = function (format) {
  return function (Number) {
    return `photos/${Number}.${format}`;
  };
};

const jpgFormat = urlGeneretorForPhoto('jpg');
jpgFormat(getRandomForPhotoId); // As there are 25 photos existed

//Function return path URL yse to access PHOTOS (photo folder) by name that is number randomly generated
const urlGeneretorForAvatar = function (format) {
  return function (Number) {
    return `img/avatar-${Number}.${format}`;
  };
};

const svgFormat = urlGeneretorForAvatar('svg');
svgFormat(getRandomForAvatarId);// As there are 6 avatar existed

//Function creates an object with necessary data
const getPhotoInfo = function () {
  const randomNameIndex = getRandomInteger(0, avatarNames.length - 1);
  const randomCommnetIndex = getRandomInteger(0, commentsText.length - 1);

  return {
    id: getRandomForPhotoId,
    url: jpgFormat(getRandomForPhotoId),
    description: 'Хорошее фото',
    likes: getRandomLikeNumber,
    comments: {
      id: getRandomForCommentId,
      avatar: svgFormat(getRandomForAvatarId),
      message: commentsText[randomCommnetIndex],
      name: avatarNames[randomNameIndex],
    },
  };
};

const severalPhotosData = Array.from({length: 25}, getPhotoInfo);
//Можно вызывать severalPhotosData через console.log(severalPhotosData);
