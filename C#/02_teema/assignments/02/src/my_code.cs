using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Kysy käyttäjältä kuukauden numero.
Tulosta sen jälkeen onko nyt "syksy", "talvi", "kevät" vai "kesä".
Käytä switch-case rakennetta. Jos käyttäjä syötti kuukauden numeron väärin, niin tulosta
"et antanut kuukauden numeroa oikein"
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Запрашиваем номер месяца у пользователя
            Console.Write("Anna kuukauden numero (1-12): ");

            // Читаем ввод пользователя и пытаемся преобразовать в число
            bool isValidInput = int.TryParse(Console.ReadLine(), out int month);

            // Проверяем корректность ввода
            if (!isValidInput || month < 1 || month > 12)
            {
                Console.WriteLine("et antanut kuukauden numeroa oikein");
            }
            else
            {
                // Определяем сезон с помощью switch-case
                switch (month)
                {
                    case 12:
                    case 1:
                    case 2:
                        Console.WriteLine("talvi");
                        break;

                    case 3:
                    case 4:
                    case 5:
                        Console.WriteLine("kevät");
                        break;

                    case 6:
                    case 7:
                    case 8:
                        Console.WriteLine("kesä");
                        break;

                    case 9:
                    case 10:
                    case 11:
                        Console.WriteLine("syksy");
                        break;

                    default:
                        Console.WriteLine("et antanut kuukauden numeroa oikein");
                        break;
                }
            }
        }
    }
}

