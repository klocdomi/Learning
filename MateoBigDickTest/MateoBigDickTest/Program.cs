using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace MateoBigDickTest
{
    class Program
    {
        static void Main(string[] args)
        {
            // zmienne do menu 
            string naz;
            string pes;
            string option;

            // lista
            List<Spis> entryList = new List<Spis>()
            {
                new Spis ("Domi","Kloc",1232112345,"Juliusza Lea","234/1"),
                new Spis("Mateo", "Lis",1232132133),
                new Spis("Wieczorek",123232321)

            };

            // nieskończona pętla z menu
            do
            {
                Console.WriteLine(@"
1) Wypisz liste
2) Dodaj do listy
3) Usuń z listy
4) Szukaj po numerze pesel");
                Console.WriteLine();
                Console.WriteLine("Wybierz opcje: ");
                option = Console.ReadLine();


                switch (option)
                {
                    case "1":
                        ShowList();
                        break;
                    case "2":
                        Console.WriteLine("Wprowadź nazwisko:");
                        naz = Console.ReadLine();
                        
                        Console.WriteLine("Wprowadź numer pesel:");
                        pes = Console.ReadLine();
                        
                        AddToList(naz,double.Parse(pes));
                        break;
                    case "3":
                        Console.WriteLine("Wprowadź pesel:");
                        pes = Console.ReadLine();
                        DeleteFromList(double.Parse(pes));
                        break;
                    case "4":
                        Console.WriteLine("Wprowadź numer pesel:");
                        pes = Console.ReadLine();
                        SearchByPesel(double.Parse(pes));
                        
                        break;
                    default:
                        Console.WriteLine("Zły wybór..");
                        break;

                }
            }
            while (true);

            
            // Wypisanie listy
            void ShowList()
            {
                foreach (Spis i in entryList)
                {
                    i.Wypisz();
                }
            }

            // Dodanie elemntu do listy
            void AddToList(string surname, double pesel)
            { 

                SearchByPesel(pesel);

                if (Spis.found == false)
                {
                    entryList.Add(new Spis(surname, pesel));
                }

            }

            // Usunięcie elementu z listy
            void DeleteFromList(double pesel)
            {
                foreach (Spis i in entryList)
                {
                    if (pesel == i.peselNumber)
                    {
                        entryList.Remove(i);
                        break;
                    }
                }
            }
            
            // Wyszukiwanie elementu po peselu 
            void SearchByPesel(double pesel)
            {
                Spis.found = false;

                foreach (Spis i in entryList)
                {
                    i.SzukajPoPesel(pesel);
                }

            }

        }

        

    }


}
