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
        private double _PeselNumber;
        public double PeselNumber
        {
            get { return _PeselNumber; }
            set
            {
                if ((value > 0) && ((value % 1) == 0)) _PeselNumber = value;
                else
                { throw new Exception("Wrong value of pesel number!"); }
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

        static Builder builder;


        public  class Builder  // Builder design pattern
        {
            public string firstname;
            public string lastname;
            public string streetname;
            public string streetnumber;
            public double pesel;

            

            public Builder WithFirstName(string firstname)
            {
                this.firstname = firstname;
                return this;
            }

            public Builder WithLastName(string lastname)
            {
                this.lastname = lastname;
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

            public Builder WithPeselNumber(double pesel)
            {
                this.pesel = pesel;
                return this;
            }

            public PersonData Build()
            {
                return new PersonData(this);
            }



        }

  
    }
}
