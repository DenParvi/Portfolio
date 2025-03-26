//tehtävä 26

// Определяем класс Oppilas
class Oppilas {
    // Конструктор принимает все параметры
    constructor(nimi, syntymavuosi, osoite, puhelin) {
        this._nimi = nimi;
        this._syntymavuosi = new Date(syntymavuosi, 0, 1); // Устанавливаем дату в формате 1.1.xxx
        this._osoite = osoite;
        this._puhelin = puhelin;
        this._arvosanat = []; // массив для хранения объектов Arvosana
    }

    // Геттер и сеттер для имени
    get nimi() {
        return this._nimi;
    }
    set nimi(value) {
        this._nimi = value;
    }

    // Геттер и сеттер для года рождения
    get syntymavuosi() {
        return this._syntymavuosi.getFullYear();
    }
    set syntymavuosi(year) {
        this._syntymavuosi = new Date(year, 0, 1);
    }

    // Геттер и сеттер для адреса
    get osoite() {
        return this._osoite;
    }
    set osoite(value) {
        this._osoite = value;
    }

    // Геттер и сеттер для телефона
    get puhelin() {
        return this._puhelin;
    }
    set puhelin(value) {
        this._puhelin = value;
    }

    // Метод для вывода всех значений
    tulosta() {
        return `${this._nimi},${this.syntymavuosi},${this._osoite},${this._puhelin}`;
    }

    // Метод для расчета возраста
    laskeIka() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._syntymavuosi.getFullYear();
    }

    // Метод для добавления новой оценки
    lisaaArvosana(arvosana) {
        if (!(arvosana instanceof Arvosana)) {
            throw new Error("Parametrin pitää olla Arvosana-tyyppiä");
        }
        this._arvosanat.push(arvosana);
    }

    // Getter HyvaOppilas
    get HyvaOppilas() {
        return this._arvosanat.some(arvosana => arvosana._arvosana >= 5);
    }

    // Getter KurssitLapi
    get KurssitLapi() {
        return this._arvosanat.every(arvosana => arvosana._arvosana >= 1);
    }

    // Metodi MuutaAsteikko
    MuutaAsteikko() {
        return this._arvosanat.map(arvosana => {
            const numero = arvosana._arvosana;
            if (numero <= 2) return "I";
            if (numero <= 4) return "II";
            if (numero <= 6) return "III";
            if (numero <= 8) return "IV";
            return "V";
        });
    }

    // Метод для вывода всех оценок
    printArvosana() {
        return this._arvosanat.map(a => a.toString()).join(".");
    }
}

// Пример использования
const oppilas = new Oppilas("Maija", 1990, "Opistotie 2", "044-7855512");

// Вывод всех данных
console.log(oppilas.tulosta()); // "Maija,1990,Opistotie 2,044-7855512"

// Расчет возраста
console.log(`Ikä: ${oppilas.laskeIka()} vuotta`); // Например, "Ikä: 34 vuotta"

// Обновление данных через сеттеры
oppilas.nimi = "Pekka";
oppilas.syntymavuosi = 1985;
oppilas.osoite = "Koulutie 3";
oppilas.puhelin = "050-1234567";

// Повторный вывод данных
console.log(oppilas.tulosta()); // "Pekka,1985,Koulutie 3,050-1234567"

// Новый расчет возраста
console.log(`Ikä: ${oppilas.laskeIka()} vuotta`); // Например, "Ikä: 39 vuotta"

//tehtävä 27

// Определяем класс Oppilas_27
class Oppilas_27 {
    constructor(nimi, syntymavuosi, osoite, puhelin) {
        // Инкапсуляция данных через приватные поля
        this._nimi = nimi;
        this._syntymavuosi = new Date(syntymavuosi, 0, 1); // Устанавливаем дату в формате 1.1.xxx
        this._osoite = osoite;
        this._puhelin = puhelin;
    }

    // Метод tulosta: возвращает все значения в строковом формате
    tulosta() {
        return `${this._nimi},${this._syntymavuosi.getFullYear()},${this._osoite},${this._puhelin}`;
    }

    // Метод laskeIka: рассчитывает возраст на основе года рождения
    laskeIka() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._syntymavuosi.getFullYear();
    }
}

// Пример использования
const oppilas_27 = new Oppilas_27("Maija", 1990, "Opistotie 2", "044-7855512");

// Вывод всех данных
console.log(oppilas_27.tulosta()); // "Maija,1990,Opistotie 2,044-7855512"

// Расчет возраста
console.log(`Ikä: ${oppilas_27.laskeIka()} vuotta`); // Например, "Ikä: 34 vuotta"

//tehtävä 28

// Класс Arvosana
class Arvosana {
    constructor(oppiaine, arvosana, suorituspvm) {
        if (arvosana < 0 || arvosana > 10) {
            throw new Error("Arvosana pitää olla välillä 0-10");
        }
        this._oppiaine = oppiaine; // строка
        this._arvosana = parseInt(arvosana); // целое число
        this._suorituspvm = new Date(suorituspvm); // Date-тип
    }
        get oppiaine() {
            return this._oppiaine;
        }
        get arvosana() {
            return this._arvosana;
        }
        get suorituspvm() {
            return this._suorituspvm;
        }
    // Метод для форматированного вывода данных оценки
    toString() {
        const pvm = this.formatDate(this._suorituspvm);
        return `${this._oppiaine},${this._arvosana},${pvm}`;
    }
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
}

// Создаем несколько оценок
const arvosana1 = new Arvosana("Fysiikka", 8, "2020-09-23");
const arvosana2 = new Arvosana("Matematiikka", 5, "2020-11-12");
const arvosana3 = new Arvosana("Englanti", 3, "2020-08-01");

// Добавляем оценки ученику
oppilas.lisaaArvosana(arvosana1);
oppilas.lisaaArvosana(arvosana2);
oppilas.lisaaArvosana(arvosana3);

// Выводим все оценки
console.log(oppilas.printArvosana());

// Tehtävä 30

// Функция varasto, реализующая замыкание и модульный паттерн
function varasto() {
    // Закрытая переменная для хранения текущего значения счетчика
    let laskuri = 0;

    // Внутренние функции для работы с счетчиком
    function Lisaa(n) {
        laskuri += n; // Увеличивает значение счетчика на n
    }

    function Tyhjenna() {
        laskuri = 0; // Сбрасывает счетчик
    }

    function Saldo() {
        return laskuri; // Возвращает текущее значение счетчика
    }

    // Возвращаем объект с методами, доступными извне
    return {
        add: Lisaa,
        clear: Tyhjenna,
        saldo: Saldo
    };
}

// Пример использования varasto
const omaVarasto = varasto();
omaVarasto.add(10); // Увеличиваем значение счетчика на 10
console.log("Saldo:", omaVarasto.saldo()); // Выводит "Saldo: 10"
omaVarasto.add(5); // Увеличиваем значение счетчика на 5
console.log("Saldo:", omaVarasto.saldo()); // Выводит "Saldo: 15"
omaVarasto.clear(); // Сбрасываем счетчик
console.log("Saldo:", omaVarasto.saldo()); // Выводит "Saldo: 0"

module.exports = {
    Oppilas : Oppilas,
    Oppilas_27 : Oppilas_27,
    Arvosana : Arvosana,
    varasto : varasto
}
