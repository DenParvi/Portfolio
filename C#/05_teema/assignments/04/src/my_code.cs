using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
tee ohjelma, joka tulostaa ensin tiedon siitä, kuinka monta parametria Main-funktioon tuli seuraavalla tavalla.

parametreja tuli 2 kpl

Lisäksi jos ensimmäisen parametri oli "opettaja" niin tulosta "koita saada opiskelijat oppimaan", 
jos se taas oli "opiskelija", niin tulosta "koita opiskella ahkerasti". Jos se oli jotain muuta, 
niin tulosta "nyt en hiffannut"
*/
namespace Projekti
{
    class MyProgram
    {
        static void Main(string[] args)
        {
            // Выводим количество параметров
            Console.WriteLine($"parametreja tuli {args.Length} kpl");

            // Проверяем первый параметр, если он существует
            if (args.Length > 0)
            {
                switch (args[0].ToLower())
                {
                    case "opettaja":
                        Console.WriteLine("koita saada opiskelijat oppimaan");
                        break;

                    case "opiskelija":
                        Console.WriteLine("koita opiskella ahkerasti");
                        break;

                    default:
                        Console.WriteLine("nyt en hiffannut");
                        break;
                }
            }
        }
    }
}