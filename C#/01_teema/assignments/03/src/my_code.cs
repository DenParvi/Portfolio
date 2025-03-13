using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele kaksi kokonaislukumuuttujaa ja lue niihin käyttäjältä arvot.
Tulosta näiden muuttujien summa, erotus ja tulo alla olevalla tavalla
(HUOM! Laskutoimituksen tulostus alkaa kaikissa samasta kohdasta!)

Summa :  10 + 5 = 15
Erotus : 10 - 5 = 5
Tulo :   10 * 5 = 50
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем две переменные для целых чисел
            int number1, number2;

            // Запрашиваем первое число у пользователя
            Console.Write("Anna ensimmäinen kokonaisluku: ");
            number1 = int.Parse(Console.ReadLine());

            // Запрашиваем второе число у пользователя
            Console.Write("Anna toinen kokonaisluku: ");
            number2 = int.Parse(Console.ReadLine());

            // Вычисляем сумму, разность и произведение
            int sum = number1 + number2;
            int difference = number1 - number2;
            int product = number1 * number2;

            // Выводим результаты с точным форматированием
            Console.WriteLine($"Summa :  {number1} + {number2} = {sum}");
            Console.WriteLine($"Erotus : {number1} - {number2} = {difference}");
            Console.WriteLine($"Tulo :   {number1} * {number2} = {product}");
        }
    }
}
