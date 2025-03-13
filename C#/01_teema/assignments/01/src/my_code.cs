using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele ja anna alkuarvot muuttujille, joihin pitäisi tallentaa seuraavat tiedot:

piin likiarvo
lähiosoite
henkilötunnus
nimesi ensimmäinen kirjain
lämpötila yhden desimaalin tarkkuudella

Tulosta arvot muuttujista allekkain käyttäen sekä Console.WriteLine(), että Console.Write()-komentoja.
Ohjelman pitää tulostaa seuraavat tiedot:

3.14159
Munkkikuja 3
121299A1234
S
-12.4
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем и задаём начальные значения для переменных
            double pi = 3.14159; // приближённое значение числа π
            string address = "Munkkikuja 3"; // адрес
            string idNumber = "121299A1234"; // идентификационный номер
            char firstInitial = 'S'; // первая буква имени
            double temperature = -12.4; // температура с точностью до одного десятичного знака

            // Выводим значения переменных построчно с помощью Console.WriteLine()
            Console.WriteLine(pi); // вывод значения числа π
            Console.WriteLine(address); // вывод адреса
            Console.WriteLine(idNumber); // вывод идентификационного номера
            Console.WriteLine(firstInitial); // вывод первой буквы имени
            Console.WriteLine(temperature); // вывод температуры

            // Выводим значения переменных построчно с помощью Console.Write()
            Console.Write(pi + "\n"); // вывод значения числа π
            Console.Write(address + "\n"); // вывод адреса
            Console.Write(idNumber + "\n"); // вывод идентификационного номера
            Console.Write(firstInitial + "\n"); // вывод первой буквы имени
            Console.Write(temperature + "\n"); // вывод температуры
        }
    }
}
