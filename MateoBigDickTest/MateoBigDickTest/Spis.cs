using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MateoBigDickTest
{
    class Spis
    {
        public string firstName { get; set;}
        public string lastName { get; set; }
        public string streetName { get; set; }
        public string streetNumber { get; set; }
        public double peselNumber { get; set; }
        public static int index;
        public static bool found = false; // zmienna do wyszukiwania po peselu 



        public Spis (string surname, double pesel)
        {
            lastName = surname;
            peselNumber = pesel;
            index++;
        }

        public Spis(string name,string surname, double pesel)
            :this(surname,pesel)
        {
            firstName = name;
        }

        public Spis(string name,string surname, double pesel, string street, string streetNum)
            :this(name,surname,pesel)
        {
            streetName = street;
            streetNumber = streetNum;
        }

        public void Wypisz()
        {

            Console.WriteLine($"First Name: {firstName}");
            Console.WriteLine($"Last name: {lastName}");
            Console.WriteLine($"Pesel number: {peselNumber}");
            Console.WriteLine($"Adress: {streetName} {streetNumber}");
            Console.WriteLine();
        }

        public void SzukajPoPesel(double pesel)
        {
            if (pesel == peselNumber)
            {
                Console.WriteLine();
                Console.WriteLine($"First Name: {firstName}");
                Console.WriteLine($"Last name: {lastName}");
                Console.WriteLine($"Pesel number: {peselNumber}");
                Console.WriteLine($"Adress: {streetName} {streetNumber}");
                Console.WriteLine();
                found = true;
               
            }

        }


    }
}
