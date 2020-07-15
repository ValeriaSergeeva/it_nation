"use strict";
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const movieSort = movieDB.movies.sort();

const media = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoInteractiveList = document.querySelector('.promo__interactive-list');
//1
media.forEach(item =>{
    item.remove();
});
//2
promoGenre.innerHTML = 'драма';
//3
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

//4 и 5
promoInteractiveList.innerHTML = '';
movieSort.forEach((item, i) =>{
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1}. ${item}
            <div class="delete"></div>
        </li>
    `;
});





