using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele muuttujat sEtunimi, sSukunimi ja sKokonimi.
Lue käyttäjältä etunimi ja sukunimi ja yhdistä nämä sKokonimi-muuttujaan.
Tulosta nimi näytölle sKokonimi-muuttujasta. Alla esimerkki ohjelmasta:

Anna etunimi : Sami
Anna sukunimi : Lahti

Nimesi on Sami Lahti
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Объявляем переменные для имени и фамилии
            string sEtunimi; // Переменная для имени
            string sSukunimi; // Переменная для фамилии
            string sKokonimi; // Переменная для полного имени

            // Читаем имя пользователя
            Console.Write("Anna etunimi: "); // Запрос имени
            sEtunimi = Console.ReadLine();

            // Читаем фамилию пользователя
            Console.Write("Anna sukunimi: "); // Запрос фамилии
            sSukunimi = Console.ReadLine();

            // Объединяем имя и фамилию в полное имя
            sKokonimi = sEtunimi + " " + sSukunimi;

            // Выводим полное имя
            Console.WriteLine("Nimesi on " + sKokonimi);
        }
    }
}

