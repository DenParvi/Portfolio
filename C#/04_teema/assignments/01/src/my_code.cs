using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele 3 alkioinen double taulukko ja lue siihen käyttäjältä arvot. 
Tulosta lopuksi syötettyjen lukujen summa ja keskiarvo seuraavasti:

SUMMA :     12.23
KESKIARVO : 4.07
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем массив на 3 элемента типа double
            double[] numbers = new double[3];
            double sum = 0;

            // Читаем значения от пользователя
            Console.WriteLine("Anna 3 lukua:");
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write($"Luku {i + 1}: ");
                bool isValidInput = double.TryParse(Console.ReadLine(), out double input);

                if (!isValidInput)
                {
                    Console.WriteLine("Virheellinen syöte. Anna numero uudelleen.");
                    i--; // Возвращаемся к текущему индексу
                    continue;
                }

                numbers[i] = input;
                sum += input; // Добавляем к сумме
            }

            // Вычисляем среднее значение
            double average = sum / numbers.Length;

            // Выводим сумму и среднее значение с форматированием
            Console.WriteLine($"SUMMA :     {sum:F2}");
            Console.WriteLine($"KESKIARVO : {average:F2}");
        }
    }
}
