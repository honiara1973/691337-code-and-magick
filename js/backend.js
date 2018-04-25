'use strict';

(function () {

  var URL = 'https://js.dump.academy/code-and-magick';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';

  var checkLoad = function (element, onLoad, onError, timeout) {

    element.addEventListener('load', function () {
      switch (element.status) {
        case 200:
          onLoad(element.response);
          break;

        default:
          onError('Статус ответа: ' + element.status + ' ' + element.statusText);
      }
    });

    element.timeout = timeout;

    element.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    element.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + element.timeout + ' мс.');
    });

  };

  window.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      checkLoad(xhr, onLoad, onError, 1000);

      xhr.open('POST', URL);
      xhr.send(data);
    },

    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      checkLoad(xhr, onLoad, onError, 1000);

      xhr.open('GET', URL_DATA);
      xhr.send();
    }
  };

})();
