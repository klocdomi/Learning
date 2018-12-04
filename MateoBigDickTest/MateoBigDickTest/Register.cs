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

        private Register()
        {

        }


        private List<PersonData> list = new List<PersonData> { };


        public void PrintList()
        {
            foreach (PersonData i in list)
            {
                i.PrintElementProperties();
            }
        }

        public void AddToList(PersonData newData)
        {
            if (!IsElementInTheCollection(newData.PeselNumber)) // checks if there is already the result with same pesel number
            {
                list.Add(newData);
            }
        }

        public void DeleteFromList(string pesel)
        {
            if (GetIndexOfElementInTheCollection(pesel) >= 0) // checks if element's index exist
            {
                list.RemoveAt(GetIndexOfElementInTheCollection(pesel));
            }
        }

        public void PrintByPesel(string pesel)
        {
            /* Predicate<PersonData> personFinder = (PersonData person) => { return person.PeselNumber.Equals(pesel); };

            list.Find(personFinder).PrintElementProperties(); */

            int index = GetIndexOfElementInTheCollection(pesel);

            if (IsElementInTheCollection(pesel))
            {
                Console.WriteLine($"Searched record with pesel number: '{pesel}' is");
                list[index].PrintElementProperties();
            }
            else { Console.WriteLine("Not found.."); }
        }
        

        private bool IsElementInTheCollection(string searchedPesel) 
        {

            /* Predicate<PersonData> personExists = (PersonData person) => { return person.Equals(searchedData); };

            return list.Exists(personExists); */

            //if (list.Any(x => x.PeselNumber == searchedPesel)) return true;
            // else return false;

            foreach (PersonData i in list)
            {
                if (i.PeselNumber == searchedPesel) return true;
            }

            return false;
        }

        private int GetIndexOfElementInTheCollection(string searchedPesel) 
        {
            /* Predicate<PersonData> indexFinder = (PersonData person) => { return person.PeselNumber.Equals(searchedPesel); };

            return list.FindIndex(indexFinder); */

            int index = -1;

            if (IsElementInTheCollection(searchedPesel))
            {
                for(int i = 0; i < list.Count; i++)
                {
                    if (list[i].PeselNumber == searchedPesel)
                    {
                        index = i;
                    }
                }
            }

            return index;
        }

    }
}
