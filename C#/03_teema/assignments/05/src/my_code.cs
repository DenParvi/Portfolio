using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä merkkejä, kunnes käyttäjä painaa enteriä. Isot kirjaimet tulostuvat pienenä 
ja pienet kirjaimet tulostuvat isona. Muut merkit eivät tulostu.

Riittää, että toimii kirjaimilla väliltä a-z ja A-Z.
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Syötä merkkejä (enter lopettaa):");

            while (true)
            {
                // Читаем один символ с консоли
                ConsoleKeyInfo keyInfo = Console.ReadKey(intercept: true);
                char inputChar = keyInfo.KeyChar;

                // Прерываем цикл, если пользователь нажал Enter
                if (keyInfo.Key == ConsoleKey.Enter)
                {
                    Console.WriteLine();
                    break;
                }

                // Проверяем и преобразуем символы
                if (char.IsLetter(inputChar))
                {
                    if (char.IsUpper(inputChar))
                    {
                        Console.Write(char.ToLower(inputChar)); // Преобразуем в нижний регистр
                    }
                    else if (char.IsLower(inputChar))
                    {
                        Console.Write(char.ToUpper(inputChar)); // Преобразуем в верхний регистр
                    }
                }
            }

            Console.WriteLine("Ohjelma päättyi.");
        }
    }
}

