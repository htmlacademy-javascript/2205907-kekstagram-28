const lengthCheck = function (str, length) {
  if (str.length === length) {
    return true;
  }
  return false;
};

lengthCheck();

const reverse = (s) => s.split('').reverse().join('');

const isPalindrome = function (str) {
  const editedText = str.trim().toLowerCase();
  if (editedText === reverse(editedText)) {
    return true;
  }
  return false;
};

isPalindrome();

const integerNumber = function (str) {
  let result = '';
  let i = 0;

  for (i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result = result + str[i];
    }
  }
  return parseInt(result, 10);
};

integerNumber();

const addToStart = function (str, length, finishing) {
  let result = str;

  if (str.length > length) {
    return str;
  }

  let tmp = '';
  while (result.length !== length) {
    tmp = finishing + result;
    if (tmp.length > length) {
      finishing = finishing.slice(0, length - tmp.length);
      result = finishing + result;
    } else {
      result = finishing + result;
    }
  }
  return result;
};

addToStart();


