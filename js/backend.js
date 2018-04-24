'use strict';

(function () {

  var URL = 'https://js.dump.academy/code-and-magick';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';

  window.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.open('POST', URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.open('GET', URL_DATA);
      xhr.send();
    }
  };

})();
