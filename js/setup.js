'use strict';

(function () {
  var WIZARDS_AMOUNT = 4;
  var WIZARDS_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var userDialog = document.querySelector('.setup');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var setupWizardEyes = setupWizardAppearance.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var setupInputEyesColor = setupWizardAppearance.querySelector('input[name=eyes-color]');
  var setupInputFireballColor = setupFireballWrap.querySelector('input[name=fireball-color]');

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    artifactsElement.style.outline = '2px dashed red';
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    artifactsElement.style.outline = 'none';
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  userNameInput.addEventListener('invalid', function () {
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

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  setupWizardEyes.addEventListener('click', function () {
    window.randomColor.colorizeElement(setupWizardEyes, window.randomColor.randomEyesColor(), setupInputEyesColor);
  });

  setupFireballWrap.addEventListener('click', function () {
    window.randomColor.colorizeElement(setupFireballWrap, window.randomColor.randomFireballColor(), setupInputFireballColor);
  });

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

  var randomWizards = [];

  var randomWizardName = function () {
    var j = window.util.getRandomInt(0, WIZARDS_FIRST_NAMES.length - 1);
    return WIZARDS_FIRST_NAMES[j] + ' ' + WIZARDS_LAST_NAMES[j];
  };

  for (var i = 0; i < WIZARDS_AMOUNT; i++) {
    var randomWizard = {
      name: randomWizardName(),
      coatColor: window.randomColor.randomCoatColor(),
      eyesColor: window.randomColor.randomEyesColor()
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

})();
