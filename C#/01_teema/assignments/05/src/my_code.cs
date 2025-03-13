using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele muuttuja pii, jolle annat alkuarvoksi piin likiarvon 6 desimaalin tarkkuudella.
Lue käyttäjältä ympyrän halkaisija ja tulosta ympyrän piiri ja pinta-ala kolmen desimaalin
tarkkuudella seuraavasti (halkaisijaksi annettu 2,5) :

PIIRI     : 7,854
PINTA-ALA : 4,909 
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем константу для числа π с точностью до 6 знаков после запятой
            const double pi = 3.141593;

            // Запрашиваем у пользователя диаметр окружности
            Console.Write("Anna ympyrän halkaisija: ");
            double diameter = double.Parse(Console.ReadLine());

            // Вычисляем радиус
            double radius = diameter / 2;

            // Вычисляем периметр и площадь окружности
            double circumference = 2 * pi * radius;
            double area = pi * radius * radius;

            // Выводим результаты с точностью до 3 знаков после запятой
            Console.WriteLine($"PIIRI     : {circumference:F3}");
            Console.WriteLine($"PINTA-ALA : {area:F3}");
        }
    }
}

