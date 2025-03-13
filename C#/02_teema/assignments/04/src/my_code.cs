using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Lue käyttäjältä kaksi kokonaislukua sekä operaatio joka lukujen välillä
suoritetaan (voi olla +, -, * tai / eli kyseessä siis nelilaskin).

Käytä operaation tallentamiseen string-tyyppistä muuttujaa.

Tutki switch-case rakenteessa minkä operaation käyttäjä syötti ja
tulosta sen perusteella lukujen laskutoimitus vastauksineen. Osamäärä
tulostetaan kahden desimaalin tarkkuudella

Esimerkiksi
jos käyttäjä syöttää luvut "12" ja "13" ja operaatioksi "+" niin tulostetaan

12 + 13 = 25

Jos operaatio oli annettu väärin, niin tulosta virheilmoitus
"annoit operaation väärin"

Nollalla jakoa ei saa ohjelmassa tapahtua, vaan silloin tulostetaan
"Nollalla jako, ei voida suorittaa"
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Запрашиваем у пользователя два целых числа
            Console.Write("Anna ensimmäinen kokonaisluku: ");
            bool isValidFirstNumber = int.TryParse(Console.ReadLine(), out int firstNumber);

            Console.Write("Anna toinen kokonaisluku: ");
            bool isValidSecondNumber = int.TryParse(Console.ReadLine(), out int secondNumber);

            // Проверяем корректность ввода чисел
            if (!isValidFirstNumber || !isValidSecondNumber)
            {
                Console.WriteLine("Virheellinen syöte. Anna kokonaislukuja.");
                return;
            }

            // Запрашиваем операцию
            Console.Write("Anna operaatio (+, -, *, /): ");
            string operation = Console.ReadLine();

            // Выполняем операцию в зависимости от введенного знака
            switch (operation)
            {
                case "+":
                    Console.WriteLine($"{firstNumber} + {secondNumber} = {firstNumber + secondNumber}");
                    break;

                case "-":
                    Console.WriteLine($"{firstNumber} - {secondNumber} = {firstNumber - secondNumber}");
                    break;

                case "*":
                    Console.WriteLine($"{firstNumber} * {secondNumber} = {firstNumber * secondNumber}");
                    break;

                case "/":
                    if (secondNumber == 0)
                    {
                        Console.WriteLine("Nollalla jako, ei voida suorittaa");
                    }
                    else
                    {
                        Console.WriteLine($"{firstNumber} / {secondNumber} = {(firstNumber / (double)secondNumber):F2}");
                    }
                    break;

                default:
                    Console.WriteLine("annoit operaation väärin");
                    break;
            }
        }
    }
}

