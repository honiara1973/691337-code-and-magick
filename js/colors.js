'use strict';

window.randomColor = (function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_WRAP_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };

  var getRandomElement = function (array) {
    return array[getRandomInt(0, array.length - 1)];
  };

  return {
    randomEyesColor: getRandomElement(EYES_COLORS),
    randomCoatColor: getRandomElement(COAT_COLORS),
    randomFireballColor: getRandomElement(FIREBALL_WRAP_COLORS)
  };
})();


//Для создания похожих 4 волшебников - у нас цикл, в котором функцией присвается цвет ключам объекта
//для изменения у текущего волшебника цвета - мы на нем кликаем, и событием меняем цвет глаз и файрбола
//к массиву eyes-colors обращаемся в обоих случаях
