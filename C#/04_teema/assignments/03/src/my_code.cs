using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Lue käyttäjältä pitkähkö teksti string muuttujaan. Muuta kaikki kirjaimet isoiksi kirjaimiksi 
ja tulosta muutettu teksti. Korvaa kaikki isot A kirjaimet huutomerkillä ja tulosta teksti. 
Poista kaikki välilyönnit ja tulosta teksti. Tulosta lopuksi kaikki merkit lopusta alkuun 
yhdellä välilyönnillä eroteltuna 
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Читаем длинный текст от пользователя
            Console.WriteLine("Anna pitkähkö teksti:");
            string inputText = Console.ReadLine();

            // Переводим текст в верхний регистр
            string upperText = inputText.ToUpper();
            Console.WriteLine("Isot kirjaimet:");
            Console.WriteLine(upperText);

            // Заменяем все большие буквы 'A' на '!'
            string replacedText = upperText.Replace('A', '!');
            Console.WriteLine("Huutomerkillä korvatut A-kirjaimet:");
            Console.WriteLine(replacedText);

            // Удаляем все пробелы
            string noSpacesText = replacedText.Replace(" ", "");
            Console.WriteLine("Ilman välilyöntejä:");
            Console.WriteLine(noSpacesText);

            // Выводим текст в обратном порядке с пробелами между символами
            Console.WriteLine("Merkit lopusta alkuun:");
            for (int i = noSpacesText.Length - 1; i >= 0; i--)
            {
                Console.Write(noSpacesText[i] + (i > 0 ? " " : ""));
            }
            Console.WriteLine();
        }
    }
}
