using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MateoBigDickTest
{
    class Data
    {
        public string firstName { get; set;}
        public string lastName { get; set; }
        public string streetName { get; set; }
        public string streetNumber { get; set; }
        public double peselNumber { get; set; }
        public static bool found = false; // zmienna do wyszukiwania po peselu 



        public Data (string surname, double pesel)
        {
            lastName = surname;
            peselNumber = pesel;
        }

        public Data(string name,string surname, double pesel)
            :this(surname,pesel)
        {
            firstName = name;
        }

        public Data(string name,string surname, double pesel, string street, string streetNum)
            :this(name,surname,pesel)
        {
            streetName = street;
            streetNumber = streetNum;
        }

        public void Write()
        {

            Console.WriteLine($"First Name: {firstName}");
            Console.WriteLine($"Last name: {lastName}");
            Console.WriteLine($"Pesel number: {peselNumber}");
            Console.WriteLine($"Adress: {streetName} {streetNumber}");
            Console.WriteLine();
        }

        public void Search(double pesel)
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
