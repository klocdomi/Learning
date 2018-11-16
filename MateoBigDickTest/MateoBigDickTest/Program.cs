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

            // lista
            List<Data> entryList = new List<Data>()
            {
                new Data ("Domi","Kloc",1232112345,"Juliusza Lea","234/1"),
                new Data("Mateo", "Lis",1232132133),
                new Data("Wieczorek",123232321)

            };

   
            
            // Wypisanie listy
            void ShowList()
            {
                foreach (Data i in entryList)
                {
                    i.Write();
                }
            }

            // Dodanie elemntu do listy
            void AddToList(string surname, double pesel)
            { 

                SearchByPesel(pesel);

                if (Data.found == false)
                {
                    entryList.Add(new Data(surname, pesel));
                }

            }

            // Usunięcie elementu z listy
            void DeleteFromList(double pesel)
            {
                foreach (Data i in entryList)
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
                Data.found = false;

                foreach (Data i in entryList)
                {
                    i.Search(pesel);
                }

            }

        }

        

    }


}
