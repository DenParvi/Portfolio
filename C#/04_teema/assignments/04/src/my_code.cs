using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Lotossa arvotaan seitsemän (7) varsinaista numeroa ja yksi (1) lisänumero. Numerot ovat väliltä 1-40. 
Esittele kahdeksan (8) alkioinen lotto-taulukko ja arvo siihen lottonumerot (7 ensimmäistä on siis 
varsinaisia lottonumeroita ja viimeinen on lisänumero). Muista, että samaa numeroa ei saa tulla 
lottoriviin eli mieti miten voisit tarkistaa onko arvottu numero jo lottorivissä entuudestaan ja 
silloin sen tilalle pitää arpoa uusi numero.

Tulosta ensi arvottu rivi ja sitten lajiteltu lottorivi seuraavasti:

ARVOTTU   : 31 4 1 19 25 16 12 13  
LAJITELTU : 1 4 12 16 19 25 31 + 13

HUOM!! seitsemän varsinaista numeroa on lajiteltu suuruusjärjestykseen! 
Mutta lisänumeroa ei tietenkään saa ottaa lajitteluun mukaan! Löytysköhän Array.Sort:sta 
sellainen ominaisuus, jolla tämän saisi ratkaistua?
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем массив для лотерейных чисел
            int[] lottoNumbers = new int[8];
            Random random = new Random();

            // Генерируем уникальные числа
            for (int i = 0; i < 8; i++)
            {
                int newNumber;
                bool isUnique;
                do
                {
                    newNumber = random.Next(1, 41); // Число от 1 до 40
                    isUnique = true;

                    // Проверяем, уникально ли число
                    for (int j = 0; j < i; j++)
                    {
                        if (lottoNumbers[j] == newNumber)
                        {
                            isUnique = false;
                            break;
                        }
                    }
                } while (!isUnique);

                lottoNumbers[i] = newNumber;
            }

            // Сохраняем дополнительные числа отдельно
            int mainNumbersCount = 7;

            // Выводим сгенерированный ряд
            Console.Write("ARVOTTU   : ");
            foreach (var number in lottoNumbers)
            {
                Console.Write(number + " ");
            }
            Console.WriteLine();

            // Сортируем первые 7 чисел
            Array.Sort(lottoNumbers, 0, mainNumbersCount);

            // Выводим отсортированный ряд
            Console.Write("LAJITELTU : ");
            for (int i = 0; i < mainNumbersCount; i++)
            {
                Console.Write(lottoNumbers[i] + " ");
            }
            Console.WriteLine($"+ {lottoNumbers[mainNumbersCount]}");
        }
    }
}

