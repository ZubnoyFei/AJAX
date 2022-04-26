/*Технология AJAX используется для подгрузки страницы. К примеру, мы добавляем и постим данные. Чтобы не нагружать сервер каждый раз и не грузить всё, используется AJAX*/

'use strict'

const inputUAH = document.querySelector('#uah'),
    inputUSD = document.querySelector('#usd');

//Назначаем обработчик события

document.addEventListener('input', () => {
    // Создаём запрос на сервер с помощью XML http request
    const request = new XMLHttpRequest();


    //Метод open собирает настройки, которые помогут в будущем сделать запрос
    request.open('GET', '/curren.json');

    //При отрпавке запроса мы должны указать, что именно мы отправляем: что за информация, как она закодирована
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    //status - это свойство, которое показывает статус нашего запроса(404, 403, 500)
    //statusText - текстовое описание ответа от сервера
    //response - ответ от сервера
    //readyState - текущее состояние нашего запроса

    /*События объекта*/
    request.addEventListener('readystatechange', ()=> {//Событие отслеживает статус готовности запроса в данный текущий момент
if(request.readyState === 4 && request.status === 200) {// Если все данные пришли и статут 200
console.log(request.response)
}
    });

});