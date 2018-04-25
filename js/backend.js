'use strict';

(function () {

  var URL = 'https://js.dump.academy/code-and-magick';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data1';
 
  

  window.backend = {
    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      var onError = function (message) {
        console.error(message);
      };  
      
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200: 
          onLoad(xhr.response);
          break;

        default: 
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        } 
      });

    xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
    xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + ' мс.');
      });

    xhr.timeout = 1;
     
    xhr.open('POST', URL);
    xhr.send(data);
    },

    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200: 
          onLoad(xhr.response);
          break;

        default: 
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        } 
        
      });

      xhr.open('GET', URL_DATA);
      xhr.send();
    }
  };

})();
