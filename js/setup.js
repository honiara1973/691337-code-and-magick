'use strict';

var WIZARDS_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_WRAP_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');
//var setupSubmit = userDialog.querySelector('.setup-submit');

var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
var setupWizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var setupInputEyesColor = setupWizardAppearance.querySelector('input[name=eyes-color]');
var setupInputFireballColor = setupFireballWrap.querySelector('input[name=fireball-color]');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getRandomElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

var onPopupEscPress = function (evt) {
        //не сделано, если фокус на поле ввода имени, то зактрываться не должно
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
 document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

//Не сделана отправка формы - какая команда?
// Edge не понимает minlength
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

setupWizardEyes.addEventListener('click', function () {
  var newEyesColor = getRandomElement(EYES_COLORS);
  setupWizardEyes.style.fill = newEyesColor;
  setupInputEyesColor.value = newEyesColor;
});


setupFireballWrap.addEventListener('click', function () {
  var newFireballWrapColor = getRandomElement(FIREBALL_WRAP_COLORS);
  setupFireballWrap.style.background = newFireballWrapColor;
  setupInputFireballColor.value = newFireballWrapColor;
});


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');


var randomWizards = [];

var randomWizardName = function () {
  var j = getRandomInt(0, WIZARDS_FIRST_NAMES.length - 1);
  return WIZARDS_FIRST_NAMES[j] + ' ' + WIZARDS_LAST_NAMES[j];
};

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
  var randomWizard = {
    name: randomWizardName(),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  randomWizards.push(randomWizard);
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = randomWizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomWizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < randomWizards.length; i++) {
  fragment.appendChild(renderWizard(randomWizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
