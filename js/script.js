'use strict'

const inputUah = document.querySelector('#uah'),
    inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
    //Нам нужно сделать запрос на сервер. Для этого будем пользоваться встроенным объектом браузера
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /*Зададим функцию, которая отслеживает статус готовности запроса в данный текущий момент*/

    request.addEventListener('readystatechange', ()=> {
        if(request.status === 200) {
            console.log(request.response);
            /*Переведем объект, который пришёл в консоль, в JSON формат*/
            const data = JSON.parse(request.response);
            /* Расчитаем курс валют на основании ответа от сервера и введённых пользователем данных*/
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);// toFixed приводит к определённому количеству знаков после точки, в данном случае 2
        } else { // Если с сервера не пришёл ответ или не выполнилась операция, мы выводим сообщение
            inputUsd.value = "Something went wrong..."
        }
    });



});