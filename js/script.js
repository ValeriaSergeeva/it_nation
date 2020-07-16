"use strict";
/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */
document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const media = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        genre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addingFilm = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type = "checkbox"]');

    //отправка формы
    addForm.addEventListener('submit', event => {
        event.preventDefault();

        let newFilm = addingFilm.value;
        const favorite = checkBox.checked;
       //проверить количество введенных символов
       if(newFilm){
            if (newFilm.length > 21){
                newFilm = `${newFilm.slice(0, 21)}...`;
            }
            if (favorite){
                console.log('Добавляем любимый фильм');
            }    
            movieDB.movies.push(newFilm);
            sortFilms();
            addFilms(movieList, movieDB.movies);
       }
       event.target.reset();

    });

    //добавить новый фильм в массив
    const addFilms = (parent, film) => {
        sortFilms();
        parent.innerHTML = '';
        film.forEach((item, i) =>{
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
             `;
        });
        //удалить фильма с помощью корзины
        document.querySelectorAll('.delete').forEach((btn, i) =>{
           btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                //рекурсия
                addFilms(parent,film);
           });
        });

    };
    //удалить рекламу спонсоров
    const deleteMedia = () => {
        media.forEach(item =>{
            item.remove();
        });
    };

    //изменить элементы
    const makeChanges = () => {
        genre.innerHTML = 'драма';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    //сортировать элементы массива
    const sortFilms = () => {
        movieDB.movies.sort();
    };

    //вызов функций
    deleteMedia();
    makeChanges();
    addFilms(movieList, movieDB.movies);
});
//4 и 5
// movieList.innerHTML = '';
// movieSort.forEach((item, i) =>{
//     movieList.innerHTML += `
//         <li class="promo__interactive-item"> ${i + 1}. ${item}
//             <div class="delete"></div>
//         </li>
//     `;
// });


//     buttonSubmit.addEventListener('click', (e) => {
//         e.preventDefault();
//         movieSort.push(addInput);
//         console.log(movieSort); 
//     });
    










