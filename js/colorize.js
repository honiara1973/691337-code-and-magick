'use strict';

window.colorize = (function (element, array) {
  element.addEventListener('click', function () {
  var color = window.randomColor.array;

  if (element.tagName.toLowerCase() === 'div') {
    element.style.backgroundColor = color;
  } else {
    element.style.fill = color;
  }
  });

})();

  //Для создания похожих 4 волшебников - у нас цикл, в котором функцией присвается цвет ключам объекта
  //для изменения у текущего волшебника цвета - мы на нем кликаем, и событием меняем цвет глаз и файрбола
  //к массиву eyes-colors обращаемся в обоих случаях
