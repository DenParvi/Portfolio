using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä koenumero 4-10 väliltä. Jos käyttäjä syötti arvosanan väärin,
niin tulosta "et antanut arvosanaa annetulta väliltä". Muussa tapauksessa tulosta:

"hyvä", jos arvosana oli 9 tai 10
"kelpo", jos 7-8
"tyydyttävä", jos 5-6
"heikko", jos 4

Toteuta ohjelma if-rakenteella
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Запрашиваем оценку у пользователя
            Console.Write("Anna koenumero (4-10): ");

            // Читаем ввод пользователя и пытаемся преобразовать в число
            bool isValidInput = int.TryParse(Console.ReadLine(), out int grade);

            // Проверяем, является ли ввод корректным числом и находится ли в пределах 4-10
            if (!isValidInput || grade < 4 || grade > 10)
            {
                Console.WriteLine("et antanut arvosanaa annetulta väliltä");
            }
            else
            {
                // Определяем категорию оценки
                if (grade == 9 || grade == 10)
                {
                    Console.WriteLine("hyvä");
                }
                else if (grade == 7 || grade == 8)
                {
                    Console.WriteLine("kelpo");
                }
                else if (grade == 5 || grade == 6)
                {
                    Console.WriteLine("tyydyttävä");
                }
                else if (grade == 4)
                {
                    Console.WriteLine("heikko");
                }
            }
        }
    }
}
