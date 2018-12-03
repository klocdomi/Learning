using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MateoBigDickTest
{
    class PersonData
    {
        private string FirstName { get; set;}
        private string LastName { get; set; }
        private string StreetName { get; set; }
        private string StreetNumber { get; set; }
        private string _PeselNumber;
        public string PeselNumber
        {
            get
            {
                return _PeselNumber;
            }
            set
            {
                 _PeselNumber = value;
            }
        }

        public void PrintElementProperties()
        {

            Console.WriteLine($"First Name: {FirstName}");
            Console.WriteLine($"Last name: {LastName}");
            Console.WriteLine($"Pesel number: {PeselNumber}");
            Console.WriteLine($"Adress: {StreetName} {StreetNumber}");
            Console.WriteLine();
        }


        private PersonData(Builder builder)
        {
            
            FirstName = builder.firstname;
            LastName = builder.lastname;
            StreetName = builder.streetname;
            StreetNumber = builder.streetnumber;
            PeselNumber = builder.pesel;
            
        }

        public static Builder Metoda(string surname, string pesel)
        {
            Builder newInstance = new Builder(surname, pesel);

            return newInstance;
            
        }

        public class Builder  // Builder design pattern
        {
            public string firstname;
            public string lastname;
            public string streetname;
            public string streetnumber;
            public string pesel;

            public Builder(string lastname, string pesel)
            {
                this.lastname = lastname;
                this.pesel = pesel;
            }
            
            public Builder WithFirstName(string firstname)
            {
                this.firstname = firstname;
                return this;
            }

            public Builder WithStreetName(string streetname)
            {
                this.streetname = streetname;
                return this;
            }

            public Builder WithStreetNumber(string streetnumber)
            {
                this.streetnumber = streetnumber;
                return this;
            }

            public PersonData Build()
            {
                return new PersonData(this);
            }



        }

  
    }
}
