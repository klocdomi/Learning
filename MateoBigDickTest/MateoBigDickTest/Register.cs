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
            if (!IsElementInTheCollection(newData)) // checks if there is already the result with same pesel number
            {
                list.Add(newData);
            }

        }

        public void DeleteFromList(string pesel)
        {
            if (GetIndexOfElementInTheCollection(Convert.ToInt32(pesel)) >= 0) // checks if element's index exist
            {
                list.RemoveAt(GetIndexOfElementInTheCollection(Convert.ToInt32(pesel)));
            }

        }

        public void PrintByPesel(string pesel)
        {

            Predicate<PersonData> personFinder = (PersonData person) => { return person.PeselNumber.Equals(pesel); };

            list.Find(personFinder).PrintElementProperties();
            
        }
        

        private bool IsElementInTheCollection(PersonData searchedData)
        {

            Predicate<PersonData> personExists = (PersonData person) => { return person.Equals(searchedData); };

            return list.Exists(personExists);

        }

        private int GetIndexOfElementInTheCollection(double searchedPesel)
        {

            Predicate<PersonData> indexFinder = (PersonData person) => { return person.PeselNumber.Equals(searchedPesel); };

            return list.FindIndex(indexFinder);

        }

    }
}
