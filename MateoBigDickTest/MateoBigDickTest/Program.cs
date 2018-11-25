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
            newReg.AddToList(new PersonData.Builder()
                .WithFirstName("Domi")
                .WithLastName("Kloc")
                .WithStreetName("Juliusza Lea")
                .WithStreetNumber("234/1")
                .WithPeselNumber(123456789)
                .Build());


            newReg.AddToList(new PersonData.Builder()
                .WithFirstName("Mateo")
                .WithLastName("Lis")
                .WithPeselNumber(12345)
                .Build());

            newReg.AddToList(new PersonData.Builder()
                .WithLastName("Wieczorek")
                .WithPeselNumber(123112)
                .Build());

            // throws exception - pesel cannot be undefined
           // newReg.AddToList(new PersonData.Builder()
               // .WithPeselNumber(23.323)
               // .Build());


            // checking if pesel is unique before adding to list test
            newReg.AddToList(new PersonData.Builder()
                .WithFirstName("domi")
                .WithPeselNumber(997)
                .Build());

            newReg.AddToList(new PersonData.Builder()
                .WithFirstName("mati")
                .WithPeselNumber(997)
                .Build());

            newReg.AddToList(new PersonData.Builder()
                .WithFirstName("tommi")
                .WithPeselNumber(123)
                .Build());

           
            // deleting test
            newReg.DeleteFromList(123);
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
