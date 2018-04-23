'use strict';

window.randomColor = (function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_WRAP_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomElement = function (array) {
    return array[window.util.getRandomInt(0, array.length - 1)];
  };

  return {
    randomEyesColor: function () {
      return getRandomElement(EYES_COLORS);
    },

    randomCoatColor: function () {
      return getRandomElement(COAT_COLORS);
    },

    randomFireballColor: function () {
      return getRandomElement(FIREBALL_WRAP_COLORS);
    },

    colorizeElement: function (element, randomColor, inputName) {
      var newColor = randomColor;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = newColor;
      } else {
        element.style.fill = newColor;
      }
      inputName.value = newColor;
    }
  };

})();
