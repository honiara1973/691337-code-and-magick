'use strict';

var WIZARDS_AMOUNT = 4;
var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var randomWizards = [];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getRandomElement = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

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
