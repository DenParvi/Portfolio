using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
Tee ohjelma, joka laskee mäkihyppääjän yhden kierroksen suorituspisteet. Ohjelma kysyy hypyn pituuden 
(liukuluku 0.5 metrin välein ja pituuden oltava > 0) sekä viiden arvostelutuomarin tyylipisteet (0-20 välillä 0.5 välein eli 
esim. 16.5 tai 17.0 tai 18.5). Vinkki. Jakojäännöksellä saa tutkittua onko puolen pisteen/metrin välein

Hyppääjän pisteet muodostuvat kaavasta.

pisteet = (hypyn pituus - kriittinen piste) * 1.8 + kolmen keskimmäisen tuomarin tyylipisteet + 60. 

Tyylipisteissä siis parhain ja huonoin pistemäärä tipahtaa pois.

Ohjelman hyppyrimäen kriittinen piste on 90 metrin kohdalla. Laita kriittinen piste vakioon KR_PISTE. 
Tulosta lopuksi hypyn pituus ja hypyn pisteet yhden desimaalin tarkkuudella seuraavalla tavalla.

PITUUS  : 115,5 m
PISTEET : 161,4

Käytä ohjelmassa funktioita (funktiot eivät saa palauttaa mitään ja kun käytät viittauksia, niin pitää
käyttää out-viittausta):

KysyHypynPituus
KysyTuomareidenPisteet
LaskeHypynPisteet
Tulosta

HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void MyMain()

HUOM 2!
Kun ohjelma on valmis, nimeä Main funktio MyMain-funktioksi ennen testaamista ja palautusta
*/
namespace Projekti
{
    class MyProgram
    {
        public static void MyMain()
        {
            const double KR_PISTE = 90.0;
            double hypynPituus;
            double[] tuomariPisteet = new double[5];
            double hypynPisteet;

            KysyHypynPituus(out hypynPituus);
            KysyTuomareidenPisteet(out tuomariPisteet);
            LaskeHypynPisteet(hypynPituus, tuomariPisteet, KR_PISTE, out hypynPisteet);
            Tulosta(hypynPituus, hypynPisteet);
        }

        public static void KysyHypynPituus(out double pituus)
        {
            Console.Write("Anna hypyn pituus (metreinä, 0.5 välein, > 0): ");
            while (!double.TryParse(Console.ReadLine(), out pituus) || pituus <= 0 || (pituus * 10) % 5 != 0)
            {
                Console.WriteLine("Virheellinen syöte. Anna positiivinen pituus 0.5 välein.");
            }
        }

        public static void KysyTuomareidenPisteet(out double[] pisteet)
        {
            pisteet = new double[5];
            Console.WriteLine("Anna viiden tuomarin tyylipisteet (0-20, 0.5 välein):");
            for (int i = 0; i < pisteet.Length; i++)
            {
                Console.Write($"Tuomari {i + 1}: ");
                while (!double.TryParse(Console.ReadLine(), out pisteet[i]) || pisteet[i] < 0 || pisteet[i] > 20 || (pisteet[i] * 10) % 5 != 0)
                {
                    Console.WriteLine("Virheellinen syöte. Anna pisteet väliltä 0-20, 0.5 välein.");
                }
            }
        }

        public static void LaskeHypynPisteet(double pituus, double[] tuomariPisteet, double kriittinenPiste, out double pisteet)
        {
            Array.Sort(tuomariPisteet);
            double kolmenKeskimPisteet = tuomariPisteet[1] + tuomariPisteet[2] + tuomariPisteet[3];
            pisteet = (pituus - kriittinenPiste) * 1.8 + kolmenKeskimPisteet + 60.0;
        }

        public static void Tulosta(double pituus, double pisteet)
        {
            Console.WriteLine($"PITUUS  : {pituus:F1} m");
            Console.WriteLine($"PISTEET : {pisteet:F1}");
        }
    }
}