using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Laita vakioon ARVATTAVA_LUKU joku arvo väliltä 1-500. Tee ohjelma, joka pyytää arvaamaan lukua
do-while-silmukassa, kunnes käyttäjä arvaa luvun oikein.

Jos käyttäjä syötti isomman luvun kuin vakiossa, niin tulosta :

"Annoit liian ison luvun" 

Jos taas käyttäjän syöttämä luku oli pienempi kuin vakion luku niin tulosta :

"Annoit liian pienen luvun"

Kun käyttäjä arvaa luvun oikein niin tulosta :

"Oikein, arvasit luvun 27 kerralla!" 

Missä siis arvo 27 kertoo montako kierrosta meni ennen kuin käyttäjä arvasi oikein

Kun testaat/palautat koodin, niin laita vakioon arvoksi 308.
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Задаем значение константы ARVATTAVA_LUKU, которая будет загадана
            const int ARVATTAVA_LUKU = 308;

            int userGuess; // Переменная для хранения числа, введенного пользователем
            int attempts = 0; // Счетчик попыток

            //Console.WriteLine("Arvaa luku välillä 1-500"); // Выводим приветственное сообщение

            do
            {
                // Увеличиваем счетчик попыток
                attempts++;

                // Запрашиваем ввод числа у пользователя
                Console.Write("Anna luku: ");
                string input = Console.ReadLine();

                // Пробуем преобразовать введенное значение в целое число
                if (int.TryParse(input, out userGuess))
                {
                    // Если введенное число больше загаданного
                    if (userGuess > ARVATTAVA_LUKU)
                    {
                        Console.WriteLine("Annoit liian ison luvun");
                    }
                    // Если введенное число меньше загаданного
                    else if (userGuess < ARVATTAVA_LUKU)
                    {
                        Console.WriteLine("Annoit liian pienen luvun");
                    }
                    // Если пользователь угадал число
                    else
                    {
                        Console.WriteLine($"Oikein, arvasit luvun {attempts} kerralla!");
                        break; // Прерываем цикл, так как число угадано
                    }
                }
                else
                {
                    // Если ввод нельзя преобразовать в целое число
                    Console.WriteLine("Syötä kelvollinen luku välillä 1-500");
                }

            } while (true); // Повторяем цикл до тех пор, пока пользователь не угадает
        }
    }
}
