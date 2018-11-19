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

            Register newReg = Register.GetInstance();

            //Register newReg2 = new Register();

            // adding some objects to list
            newReg.Add(new PersonData.Builder()
                .FirstName("Domi")
                .LastName("Kloc")
                .StreetName("Juliusza Lea")
                .StreetNumber("234/1")
                .PeselNumber(123456789)
                .build());


            newReg.Add(new PersonData.Builder()
                .FirstName("Mateo")
                .LastName("Lis")
                .PeselNumber(12345)
                .build());

            newReg.Add(new PersonData.Builder()
                .LastName("Wieczorek")
                .PeselNumber(123112)
                .build());



            // checking if pesel is unique before adding to list test
            newReg.Add(new PersonData.Builder()
                .FirstName("domi")
                .PeselNumber(997)
                .build());

            newReg.Add(new PersonData.Builder()
                .FirstName("mati")
                .PeselNumber(997)
                .build());

            newReg.Add(new PersonData.Builder()
                .FirstName("tommi")
                .PeselNumber(123)
                .build());
       
         
            
           
            // deleting test
            newReg.Delete(123);
            //newReg.Delete(997);
            //newReg.Delete(1);

            // printing by pesel test
            //newReg.PrintByPesel(123456789);

            // printing list
            newReg.PrintList();

            Console.ReadKey();
      

        }

        

    }

    



}
