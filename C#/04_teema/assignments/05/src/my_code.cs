using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele sellainen 2-ulottoinen taulukko, johon voit tallentaa maanantain ja perjantain välisenä aikana 
neljä mittaustulosta jokaiselta päivältä (mittaustulos on sademäärä milleinä). Lue käyttäjältä nämä 
mittaustulokset taulukkoon ja tulosta lopuksi jokaisen päivän mittaustulosten 
keskiarvo seuraavan esimerkin mukaisesti :

Maanantai   : 12.0 mm
Tiistai     : 0.0 mm
Keskiviikko : 1.9 mm
Torstai     : 22.8 mm
Perjantai   : 0.9 mm
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Дни недели
            string[] days = { "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai" };

            // Создаём двумерный массив для хранения данных
            double[,] rainfall = new double[5, 4];

            // Запрашиваем у пользователя данные
            Console.WriteLine("Anna sademäärät (milleinä) maanantain ja perjantain välisenä aikana:");

            for (int day = 0; day < days.Length; day++)
            {
                Console.WriteLine($"{days[day]}:");
                for (int measurement = 0; measurement < 4; measurement++)
                {
                    Console.Write($"  Mittaustulos {measurement + 1}: ");
                    bool isValidInput = double.TryParse(Console.ReadLine(), out double value);

                    if (!isValidInput || value < 0)
                    {
                        Console.WriteLine("Virheellinen syöte. Anna positiivinen numero.");
                        measurement--; // Повторяем ввод для текущей ячейки
                        continue;
                    }

                    rainfall[day, measurement] = value;
                }
            }

            // Вычисляем и выводим средние значения
            Console.WriteLine("\nPäivän keskiarvot:");
            for (int day = 0; day < days.Length; day++)
            {
                double sum = 0;
                for (int measurement = 0; measurement < 4; measurement++)
                {
                    sum += rainfall[day, measurement];
                }

                double average = sum / 4;
                Console.WriteLine($"{days[day],-12}: {average:F1} mm");
            }
        }
    }
}

