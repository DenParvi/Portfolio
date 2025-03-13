using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä ympyrän säde liukulukuna.

Kysy käyttäjältä myös, haluaako hän tehdä kumpaa seuraavista
(eli käyttäjä syöttää joko numeron 1 tai 2) :

    1 = laske ympyrän piiri
    2 = laske ympyrän pinta-ala

Tämän vastauksen perusteella laske dTulos-muuttujaan joko piiri
tai pinta-ala ja tulosta se. 

Toteuta tämä sekä if-rakenteella että ehdollisella operaattorilla.
Tulostus pitää siis tehdä kaksi kertaa alla olevalla tavalla:

Tulos : 12.22
Tulos : 12.22
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем константу для числа π
            const double pi = 3.141593;

            // Запрашиваем радиус окружности
            Console.Write("Anna ympyrän säde: ");
            bool isValidRadius = double.TryParse(Console.ReadLine(), out double radius);

            if (!isValidRadius || radius <= 0)
            {
                Console.WriteLine("Virheellinen säde. Anna positiivinen luku.");
                return;
            }

            // Запрашиваем выбор операции
            Console.Write("Valitse toiminto (1 = laske ympyrän piiri, 2 = laske ympyrän pinta-ala): ");
            bool isValidChoice = int.TryParse(Console.ReadLine(), out int choice);

            if (!isValidChoice || (choice != 1 && choice != 2))
            {
                Console.WriteLine("Virheellinen valinta. Anna 1 tai 2.");
                return;
            }

            // Вычисляем результат с помощью if-else
            double dTulos;
            if (choice == 1)
            {
                dTulos = 2 * pi * radius; // Вычисляем длину окружности
            }
            else
            {
                dTulos = pi * radius * radius; // Вычисляем площадь окружности
            }
            Console.WriteLine($"Tulos : {dTulos:F2}");

            // Вычисляем результат с помощью тернарного оператора
            dTulos = (choice == 1) ? (2 * pi * radius) : (pi * radius * radius);
            Console.WriteLine($"Tulos : {dTulos:F2}");
        }
    }
}

