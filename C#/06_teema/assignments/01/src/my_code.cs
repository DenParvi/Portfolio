using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
/*
Arvo 40 kpl liukulukuja väliltä 1.4 – 5.8 ja kirjoita ne "datat.txt" tiedostoon allekkain. 
Älä käytä taulukkoa tässä vaiheessa.

Sen jälkeen luo 40 alkioinen double-taulukko ja lue 
arvot tiedostosta taulukkoon. Tämän jälkeen tulosta taulukon lukujen 
summa, keskiarvo, minimiarvo ja maksimiarvo seuraavalla tavalla

SUMMA : 143.2
KA    : 3.6
MIN   : 1.4
MAX   : 5.7

Käytä funktioita:

ArvoJaTallennaTiedostoon
LueTiedostosta
TulostaTiedot


HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

HUOM 2!
Kun ohjelma on valmis, nimeä Main funktio MyMain-funktioksi ennen testaamista ja palautusta

HUOM 3!
Path-funktio pitää jättää ohjelmaan ja kun kirjoitat tiedostoon tai luet sieltä, niin
StreamWriter ja StreamReader muuttujien esittelyt pitää olla näin:

StreamWriter sw = new StreamWriter(Path("datat.txt"));
StreamReader sr = new StreamReader(Path("datat.txt"));
*/
namespace Projekti
{
    class MyProgram
    {
        static string Path(string filename)
        {
            return System.IO.Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "../../../src/", filename);
        }

        public static void MyMain()
        {
            string filename = "datat.txt";

            // Генерируем данные и сохраняем их в файл
            ArvoJaTallennaTiedostoon(filename);

            // Читаем данные из файла
            double[] data;
            LueTiedostosta(filename, out data);

            // Выводим статистику
            TulostaTiedot(data);
        }

        public static void ArvoJaTallennaTiedostoon(string filename)
        {
            Random random = new Random();
            using (StreamWriter sw = new StreamWriter(Path(filename)))
            {
                for (int i = 0; i < 40; i++)
                {
                    double value = random.NextDouble() * (5.8 - 1.4) + 1.4; // Случайное число от 1.4 до 5.8
                    sw.WriteLine(value.ToString("F1"));
                }
            }
        }

        public static void LueTiedostosta(string filename, out double[] data)
        {
            data = new double[40];
            using (StreamReader sr = new StreamReader(Path(filename)))
            {
                for (int i = 0; i < data.Length; i++)
                {
                    if (double.TryParse(sr.ReadLine(), out double value))
                    {
                        data[i] = value;
                    }
                }
            }
        }

        public static void TulostaTiedot(double[] data)
        {
            double sum = 0;
            double min = data[0];
            double max = data[0];

            foreach (double value in data)
            {
                sum += value;
                if (value < min) min = value;
                if (value > max) max = value;
            }

            double average = sum / data.Length;

            Console.WriteLine($"SUMMA : {sum:F1}");
            Console.WriteLine($"KA    : {average:F1}");
            Console.WriteLine($"MIN   : {min:F1}");
            Console.WriteLine($"MAX   : {max:F1}");
        }
    }
}
