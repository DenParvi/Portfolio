// Tehtävä 18
function teht18(radius) {
    if (radius > 0) {
        return Math.PI * Math.pow(radius, 2);
    } else {
        return 0; 
    }
}
let area = teht18(5);
console.log(`Laske pinta-ala oikealla säteellä on ${area.toFixed(2)}`);

//Tehtävä 19
function teht19(numbers) {
    // Проверяем, пустой ли массив
    if (!numbers || numbers.length === 0) {
        return {
            min: 0, // Если массив пустой, минимальное значение = 0
            max: 0, // Максимальное значение = 0
            avg: 0, // Среднее значение = 0
            sum: 0  // Сумма = 0
        };
    }

    // Инициализируем переменные для результатов
    let sum = 0;
    let min = numbers[0]; // Считаем, что первый элемент самый маленький
    let max = numbers[0]; // И что первый элемент самый большой

    // Перебираем все числа в массиве
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        sum += num; // Увеличиваем сумму

        // Проверяем, меньше ли текущее число текущего минимального
        if (num < min) {
            min = num; // Обновляем минимальное значение
        }

        // Проверяем, больше ли текущее число текущего максимального
        if (num > max) {
            max = num; // Обновляем максимальное значение
        }
    }

    // Вычисляем среднее значение
    let avg = sum / numbers.length;

    // Возвращаем результаты в формате JSON
    return {
        min: min,
        max: max,
        avg: avg,
        sum: sum
    };
}

// Пример вызова функции
let numbers = [23, 45, 67, 89, 100, 34];
let result = teht19(numbers);
console.log("Результаты для массива:", result);

// Вызов функции с пустым массивом
let emptyResult = teht19([]);
console.log("Результаты для пустого массива:", emptyResult);

//Tehtävä 20
function teht20(rows, results) {
    // Проверяем, что количество строк больше нуля и results - это массив
    if (rows <= 0 || !Array.isArray(results)) {
        console.error("Parametri virheellinen: rows pitää olla > 0 ja results pitää olla taulukko.");
        return;
    }

    // Вычисляем степени и записываем в массив results
    for (let i = 0; i < rows; i++) {
        results[i] = Math.pow(i + 1, i); // Число (i + 1) возводится в степень i
    }
}

// Пример использования функции
let results = [];
teht20(5, results); // Вычислить 5 степеней
console.log("Tulokset:", results);

//Tehtävä 21

function teht21(pvm) {
    if (!pvm || typeof pvm !== "string") {
        return false;
    }

    if (pvm.length !== 10) {
        return false;
    }

    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(pvm)) {
        return false;
    }

    const [day, month, year] = pvm.split('.').map(Number);

    if (day < 1 || day > 31) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    if (year < 1900 || year > 2020) {
        return false;
    }

    return true;
}

//Tehtävä 22
function teht22(listId) {
    const ulElement = document.getElementById(listId); // Находим ul по id
    if (!ulElement) {
        console.error(`Elementti id:llä "${listId}" ei löytynyt.`);
        return [];
    }
    
    // Получаем все li-элементы внутри ul
    const liElements = ulElement.querySelectorAll('li');
    
    // Собираем текстовое содержимое li-элементов в массив
    const names = Array.from(liElements).map(li => li.textContent);
    
    return names;
}
//Tehtävä 23 script on html:ssä

//Tehtävä 24 script on html:ssä

//Tehtävä 25
 // Логика для отображения одной статьи за раз
 document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[id^="link"]'); // Все ссылки с id "linkX"
    const articles = document.querySelectorAll('article');  // Все статьи

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отключить стандартное поведение ссылки

            // Скрыть все статьи
            articles.forEach(article => {
                article.style.display = 'none';
            });

            // Показать только соответствующую статью
            const articleId = link.id.replace('link', 'article'); // Преобразовать "link1" -> "article1"
            document.getElementById(articleId).style.display = 'block';
        });
    });
});




module.exports = {
    teht18 : teht18,
    teht19 : teht19,
    teht20 : teht20,
    teht21 : teht21,
    teht22 : teht22
}