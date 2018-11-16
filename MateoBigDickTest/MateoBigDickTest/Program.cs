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

            Register newReg = new Register();
            newReg.Add(new Data("domi", 997));
            newReg.Add(new Data("mati", 997));
            newReg.PrintList();

            Console.ReadKey();
            /*
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
                    i.Print();
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
                    i.SearchByPesel(pesel);
                }

            }*/

        }

        

    }

    class Register
    {
        private int index = 0;

        public Register()
        {
            index++;
        }

        public List<Data> list = new List<Data> { };

        public void Add(Data newData)
        {
            bool check = false;
            foreach(Data i in list)
            {   
                if(true == i.SearchByPesel(newData.peselNumber))
                {
                    check = true;
                    break;
                }

            }
            Console.WriteLine(check);
            if (check != true)
            {
                list.Add(newData);
            }


        }

        public void PrintList()
        {
            foreach(Data i in list)
            {
                i.Print();
            }
        }



    }



}
