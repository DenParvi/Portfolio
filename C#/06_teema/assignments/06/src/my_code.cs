using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
Tehtävänä on laskea pankkisiirtojen viitteistä tuttu tarkistenumero ja
tulostaa viitenumero ryhmiteltynä.

Alla on esimerkki laskemisesta. Lasketaan runko-osalle 12345 tarkistenumero:

          runko-osa     1     2     3     4     5
     painokertoimet     3     7     1     3     7
                        -------------------------
              tulot     3    14     3    12    35

näiden tulojen summa on 67

Siis oikealta alkaen kerrotaan numerot vuorollaan painoilla 
7, 3, 1, 7, 3, 1, 7, ... jne

Tarkistenumero on tulojen summa vähennettynä seuraavasta täydestä 
kymmenestä (paitsi jos summa on tasakymmeniä, on tarkiste nolla). 

Esimerkin tapauksessa siis tarkiste on 3. 

Alkuperäinen runko-osa ja tarkiste tulostetaan ruudulle näin: oikeanpuoleisimpaan 
ryhmään neljä + tarkiste, muihin viisi merkkiä ja ekaan niin monta kuin riittää

Ohjelman tulisi toimia seuraavasti:

Anna viitteen runko-osa : 325308000102798049011

Viitenumero : 32 53080 00102 79804 90117
*/
namespace Projekti
{
    class MyProgram
    {
        static void Main()
        {
            Console.Write("Anna viitteen runko-osa : ");
            string runkoOsa = Console.ReadLine(); // Чтение ввода от пользователя

            if (string.IsNullOrWhiteSpace(runkoOsa) || !runkoOsa.All(char.IsDigit))
            {
                Console.WriteLine("Virheellinen syöte. Anna vain numeroita.");
                return;
            }

            int tarkiste = LaskeTarkiste(runkoOsa);
            string viitenumero = runkoOsa + tarkiste;
            string ryhmiteltyViitenumero = RyhmitteleViitenumero(viitenumero);

            Console.WriteLine("Viitenumero : " + ryhmiteltyViitenumero);
        }

        static int LaskeTarkiste(string runkoOsa)
        {
            int[] painokertoimet = { 7, 3, 1 }; // Порядок весовых коэффициентов
            int summa = 0;

            // Вычисляем сумму произведений цифр на весовые коэффициенты справа налево
            for (int i = 0; i < runkoOsa.Length; i++)
            {
                int numero = int.Parse(runkoOsa[runkoOsa.Length - 1 - i].ToString());
                summa += numero * painokertoimet[i % painokertoimet.Length];
            }

            // Вычисляем контрольное число
            int seuraavaTaysiKymmenen = (int)Math.Ceiling(summa / 10.0) * 10;
            int tarkiste = seuraavaTaysiKymmenen - summa;

            return tarkiste % 10; // Если сумма кратна 10, контрольное число = 0
        }

        static string RyhmitteleViitenumero(string viitenumero)
        {
            // Разбиваем строку на группы справа налево
            List<string> ryhmat = new List<string>();

            for (int i = viitenumero.Length; i > 0; i -= 5)
            {
                int alku = Math.Max(0, i - 5);
                ryhmat.Insert(0, viitenumero.Substring(alku, i - alku));
            }

            return string.Join(" ", ryhmat);
        }
    }
}

