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
            // adding few objects to list
            newReg.Add(new Data("Domi", "Kloc", 1232112345, "Juliusza Lea", "234/1"));
            newReg.Add(new Data("Mateo", "Lis", 1232132133));
            newReg.Add(new Data("Wieczorek", 123232321));

            // checking if pesel is unique before adding to list test
            newReg.Add(new Data("domi", 997));
            newReg.Add(new Data("mati", 997)); 
            newReg.Add(new Data("gwp", 123));
            // deleting test
            newReg.Delete(123);

            // printing list
            newReg.PrintList();

            Console.ReadKey();
      

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


        public void PrintList()
        {
            foreach (Data i in list)
            {
                i.Print();
            }
        }

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
           
            if (check != true)
            {
                list.Add(newData);
            }

        }

        public void Delete(double pesel)
        {
            bool check = false;
            int index = 0;
            foreach(Data i in list)
            {
                index++;

                if(i.SearchByPesel(pesel) == true)
                {
                    check = true;
                    break;
                }
            }
            if (check == true)
            {
                list.RemoveAt(index-1);
            }


        }





    }



}
