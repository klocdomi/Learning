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
