using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MateoBigDickTest
{
    class Register
    {
        private static Register instance = new Register(); // Singleton design pattern

        public static Register GetInstance()
        {
            return instance;
        }


        public List<PersonData> list = new List<PersonData> { };


        public bool IsElementInTheCollection(PersonData param)
        {
            foreach (PersonData i in list)
            {
                if (i.SearchByPesel(param.PeselNumber))
                {
                    return true;
                }
            }

            return false;
          
        }

        public int IndexOfElementInTheCollection(double pesel)
        {
            int index = -1;

            foreach (PersonData i in list)
            {
                index++;

                if (i.SearchByPesel(pesel))
                {
                    return index;
                }
            }

            return -1; // element doesnt exist 
        }

        public void PrintList()
        {
            foreach (PersonData i in list)
            {
                i.Print();
            }
        }

        public void Add(PersonData newData)
        {

            if (!IsElementInTheCollection(newData)) // checks if there is already the result with same pesel number
            {
                list.Add(newData);
            }

        }

        public void Delete(double pesel)
        {
            if (IndexOfElementInTheCollection(pesel) >= 0) // checks if element's index exist
            {
                list.RemoveAt(IndexOfElementInTheCollection(pesel));
            }

        }

        public void PrintByPesel(double pesel)
        {
            foreach (PersonData i in list)
            {
                if (i.SearchByPesel(pesel))
                {
                    i.Print();
                    break;
                }
            }

        }




    }
}
