using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele 10 alkioinen int taulukko ja arvo siihen lukuja väliltä 0-10. 
Vain parilliset luvut sallitaan.Jos arvottiin pariton luku niin sen 
tilalle on arvottava uusi luku.

Tulosta luvut ensin taulukon alusta loppuun tabulaattorilla eroteltuna
ja seuraavalla rivillä lopusta alkuun tabulaattorilla eroteltuna
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Создаём массив из 10 элементов типа int
            int[] numbers = new int[10];
            Random random = new Random();

            // Заполняем массив только чётными числами
            for (int i = 0; i < numbers.Length; i++)
            {
                int value;
                do
                {
                    value = random.Next(0, 11); // Генерируем число от 0 до 10
                } while (value % 2 != 0); // Повторяем, если число нечётное

                numbers[i] = value;
            }

            // Выводим массив с начала до конца
            Console.WriteLine(string.Join("\t", numbers));

            // Выводим массив с конца до начала
            Array.Reverse(numbers);
            Console.WriteLine(string.Join("\t", numbers));
        }
    }
}

