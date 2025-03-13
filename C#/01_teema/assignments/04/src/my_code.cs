using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele nimi, pituus ja paino muuttujat. Esittele lisäksi bmi muuttuja.
Kysy käyttäjältä nimi, pituus metreinä ja paino kilon tarkkuudella.
Laske painoindeksi bmi muuttujaan seuraavasti:

bmi = paino / pituus ^ 2

Tulosta lopuksi:

Olli Opiskelija, pituutesi on 1,81 m ja painosi 104 kg
Painoindeksisi on siten 31,75
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем переменные для имени, роста, веса и индекса массы тела (BMI)
            string name;
            double height, weight, bmi;

            // Запрашиваем имя пользователя
            Console.Write("Anna nimesi: ");
            name = Console.ReadLine();

            // Запрашиваем рост пользователя в метрах
            Console.Write("Anna pituutesi metreinä (esim. 1.81): ");
            height = double.Parse(Console.ReadLine());

            // Запрашиваем вес пользователя в килограммах
            Console.Write("Anna painosi kilogrammoina: ");
            weight = double.Parse(Console.ReadLine());

            // Вычисляем индекс массы тела
            bmi = weight / (height * height);

            // Выводим результаты
            Console.WriteLine($"{name}, pituutesi on {height:F2} m ja painosi {weight:F0} kg");
            Console.WriteLine($"Painoindeksisi on siten {bmi:F2}");
        }
    }
}

