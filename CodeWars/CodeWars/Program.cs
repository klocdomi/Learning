using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeWars
{
    class Program
    {
        static void Main(string[] args)
        {

            string SpinWords(string sentence)
            {
                string[] substrings = sentence.Split(' ');
                
                
                if( substrings.Any(x => x.Length > 5 ))
                {
                    Console.WriteLine( "TURRRR");
                }

                foreach(string i in substrings)
                {
                
                }


                


                return substrings[3];
            }


            Console.WriteLine(SpinWords("alaaaa ma kota yolo."));
            Console.ReadKey();
        }
    }
}
