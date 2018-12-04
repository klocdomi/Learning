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


            newReg.AddToList(PersonData.Builder.CreateInstance("Kloc", "997")
                .WithFirstName("Domi")
                .WithStreetName("Juliusza Lea")
                .WithStreetNumber("234/1")
                .Build());


            newReg.AddToList(PersonData.Builder.CreateInstance("Lis", "1111")
                .WithFirstName("Mati")
                .Build());

            newReg.AddToList(PersonData.Builder.CreateInstance("Lis", "1234")
                .WithFirstName("Mati")
                .Build());

            newReg.AddToList(PersonData.Builder.CreateInstance("Lis", "1111")
                .WithFirstName("Mati")
                .Build());

            newReg.DeleteFromList("1234");

            newReg.PrintList();

            //newReg.PrintByPesel("1234");


            Console.ReadKey();
      

        }

        

    }

    



}
