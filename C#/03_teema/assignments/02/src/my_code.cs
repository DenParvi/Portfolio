using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele kaksi laskurimuuttujaa ja tulosta niiden avulla for-silmukassa:

11       10
12       9
13       8
...
19       2
20       1

Eli toinen arvo toisesta muuttujasta ja toinen toisesta ja
tabulointimerkki lukujen välissä
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем два счётчика
            int counter1 = 11;
            int counter2 = 10;

            // Запускаем цикл for
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"{counter1}\t{counter2}");
                counter1++;
                counter2--;
            }
        }
    }
}

