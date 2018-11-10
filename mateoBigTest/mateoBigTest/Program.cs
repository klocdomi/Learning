using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mateoBigTest
{
    class Program
    {
        static void Main(string[] args)
        {

            var temp = new Mateo();

            Console.WriteLine(temp.temp);
            Console.WriteLine(temp.temp2 == null ? "null" : temp.temp2);
            
            Console.ReadKey();

        }


       
    }
        
        class Mateo
    {
        public int temp;
        public string temp2;
    }
}
