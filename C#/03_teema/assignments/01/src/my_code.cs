using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä kokonaislukuja while-silmukassa, kunnes käyttäjä syöttää arvon -1. 
Sen jälkeen tulosta syötettyjen lukujen keskiarvo yhden desimaalin tarkkuudella
alla olevalla tavalla:

"Keskiarvo : 12.1"

Lukua -1 ei oteta keskiarvon laskentaan mukaan.

Jos käyttäjä ei syöttänyt yhtään lukua, niin keskiarvoa ei saa tulostaa
vaan silloin tulostetaan

"Et antanut yhtään lukua"
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            int sum = 0;
            int count = 0;

            Console.WriteLine("Anna kokonaislukuja (-1 lopettaa):");

            while (true)
            {
                // Считываем ввод пользователя
                Console.Write("Luku: ");
                bool isValidInput = int.TryParse(Console.ReadLine(), out int number);

                if (!isValidInput)
                {
                    Console.WriteLine("Virheellinen syöte. Anna kokonaisluku.");
                    continue;
                }

                // Прекращаем цикл, если введено -1
                if (number == -1)
                {
                    break;
                }

                // Добавляем число к сумме и увеличиваем счётчик
                sum += number;
                count++;
            }

            // Проверяем, были ли введены какие-либо числа
            if (count == 0)
            {
                Console.WriteLine("Et antanut yhtään lukua");
            }
            else
            {
                // Вычисляем и выводим среднее значение
                double average = (double)sum / count;
                Console.WriteLine($"Keskiarvo : {average:F1}");
            }
        }
    }
}
