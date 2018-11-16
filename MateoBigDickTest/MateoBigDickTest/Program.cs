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
            Register ExampleRegister = new Register();

            ExampleRegister.Add(new Data("Kloc", 1232132131));

            ExampleRegister.Show();

            Console.ReadKey();


        }

        

    }

    class Register
    {
        private int index = 0;
        public List<Data> basicList = new List<Data>()
            {
                new Data ("Domi","Kloc",1232112345,"Juliusza Lea","234/1"),
                new Data("Mateo", "Lis",1232132133),
                new Data("Wieczorek",123232321)

            };

        public Register()
        {
            index++;
        }

        public void Show()
        {
            foreach (Data i in basicList)
            {
                i.Write();
            }
        }

        public void Add(Data newObject)
        {
            basicList.Add(newObject);
        }


        // lista
        List<Data> entryList = new List<Data>()
            {
                new Data ("Domi","Kloc",1232112345,"Juliusza Lea","234/1"),
                new Data("Mateo", "Lis",1232132133),
                new Data("Wieczorek",123232321)

            };


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
