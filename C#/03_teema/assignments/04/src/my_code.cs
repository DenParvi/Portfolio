using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Kysy käyttäjältä mistä luvusta tulostetaan ja mihin asti ja millaisella askelluksella. 

HUOM! Mistä on oltava pienempi kuin mihin ja askelluksen oltava suurempi kuin 0.
Muuten kysyttävä tiedot uudestaan.

Tulosta lukusarjat sekä while-, do-while- että for-silmukoilla. 

Esimerkki:
Jos mistä on 5, mihin on 11 ja askellus on 2, niin ohjelma tulostaa kaikilla
kolmella silmukalla saman, alla olevan lukusarjan (lukujen välissä kaksi välilyöntiä).
Tulosta myös millä silmukalla luvut on tulostettu. 

WHILE:
5  7  9  11

DO-WHILE:
5  7  9  11

FOR:
5  7  9  11
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            int start, end, step;

            // Ввод данных от пользователя с проверкой условий
            while (true)
            {
                Console.Write("Mistä: ");
                bool isValidStart = int.TryParse(Console.ReadLine(), out start);

                Console.Write("Mihin: ");
                bool isValidEnd = int.TryParse(Console.ReadLine(), out end);

                Console.Write("Askelus: ");
                bool isValidStep = int.TryParse(Console.ReadLine(), out step);

                if (isValidStart && isValidEnd && isValidStep && start < end && step > 0)
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Virheelliset tiedot. Varmista, että Mistä on pienempi kuin Mihin ja Askelus on suurempi kuin 0.");
                }
            }

            // WHILE-loop
            Console.WriteLine("WHILE:");
            int current = start;
            while (current <= end)
            {
                Console.Write($"{current}  ");
                current += step;
            }
            Console.WriteLine();

            // DO-WHILE-loop
            Console.WriteLine("DO-WHILE:");
            current = start;
            do
            {
                Console.Write($"{current}  ");
                current += step;
            } while (current <= end);
            Console.WriteLine();

            // FOR-loop
            Console.WriteLine("FOR:");
            for (int i = start; i <= end; i += step)
            {
                Console.Write($"{i}  ");
            }
            Console.WriteLine();
        }
    }
}

