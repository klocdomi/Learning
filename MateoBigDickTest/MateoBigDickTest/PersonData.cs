using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MateoBigDickTest
{
    class PersonData
    {
        public string FirstName { get; set;}
        public string LastName { get; set; }
        public string StreetName { get; set; }
        public string StreetNumber { get; set; }
        public double PeselNumber { get; set; }
        
        public PersonData(Builder builder)
        {
            FirstName = builder.firstname;
            LastName = builder.lastname;
            StreetName = builder.streetname;
            StreetNumber = builder.streetnumber;
            PeselNumber = builder.pesel;
        }

        public class Builder // Builder design pattern
        {
            public string firstname;
            public string lastname;
            public string streetname;
            public string streetnumber;
            public double pesel;

            public Builder FirstName(string firstname)
            {
                this.firstname = firstname;
                return this;
            }

            public Builder LastName(string lastname)
            {
                this.lastname = lastname;
                return this;
            }

            public Builder StreetName(string streetname)
            {
                this.streetname = streetname;
                return this;
            }

            public Builder StreetNumber(string streetnumber)
            {
                this.streetnumber = streetnumber;
                return this;
            }

            public Builder PeselNumber(double pesel)
            {
                this.pesel = pesel;
                return this;
            }

            public PersonData build()
            {
                return new PersonData(this);
            }



        }

       /* public PersonData (string surname, double pesel)
        {
            LastName = surname;
            PeselNumber = pesel;
        
        }

        public PersonData(string name,string surname, double pesel)
            :this(surname,pesel)
        {
            FirstName = name;
        }

        public PersonData(string name,string surname, double pesel, string street, string streetNum)
            :this(name,surname,pesel)
        {
            StreetName = street;
            StreetNumber = streetNum;
        }
        */
        public void Print()
        {

            Console.WriteLine($"First Name: {FirstName}");
            Console.WriteLine($"Last name: {LastName}");
            Console.WriteLine($"Pesel number: {PeselNumber}");
            Console.WriteLine($"Adress: {StreetName} {StreetNumber}");
            Console.WriteLine();
        }

        public bool SearchByPesel(double pesel)
        {
            if (pesel == this.PeselNumber)
            {
                return true;
            }
            else return false;
        }


    }
}
