using ApartmentSoldCheckFunction.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Linq;

namespace ApartmentSoldCheckFunction.Utilities
{
    public static class ApartmentListParser
    {
        private const string TestInput = "                                                                                                                                         Numer mieszkania                Piętro Ilość pokoi Metraż                                  Cena/m2 Cena                Karty mieszkań                budynek                                                      \rM1\rParter\r2\r48,57\r9 300,00 zł\r451 701,00 zł\r\r\r\r\rM2\rParter\r2\r36,27\r--------\rsprzedane\r\r\r\r\rM3\rParter\r2\r36,27\r--------\rsprzedane\r\r\r\r\rM4\rParter\r3\r73,15\r9 000,00 zł\r658 350,00 zł\r\r\r\r\rM5\r1\r3\r60,18\r--------\rrezerwacja\r\r\r\r\rM6\r1\r2\r42,41\r--------\rsprzedane\r\r\r\r\rM7\r1\r2\r42,41\r--------\rsprzedane\r\r\r\r\rM8\r1\r3\r64,28\r9 200,00 zł\r591 376,00 zł\r\r\r\r\rM9\r1\r3\r62,50\r8 900,00 zł\r556 250,00 zł\r\r\r\r\rM10\r1\r3\r58,31\r--------\rrezerwacja\r\r\r\r\rM11\r1\r3\r58,31\r9 000,00 zł\r524 790,00 zł\r\r\r\r\rM12\r1\r3\r63,80\r8 900,00 zł\r567 820,00 zł\r\r\r\r\rM13\r2\r3\r60,14\r--------\rsprzedane\r\r\r\r\rM14\r2\r2\r42,35\r--------\rsprzedane\r\r\r\r\rM15\r2\r2\r42,35\r9 500,00 zł\r402 325,00 zł\r\r\r\r\rM16\r2\r3\r64,28\r9 200,00 zł\r591 376,00 zł\r\r\r\r\rM17\r2\r3\r62,49\r8 900,00 zł\r556 161,00 zł\r\r\r\r\rM18\r2\r3\r58,21\r--------\rrezerwacja\r\r\r\r\rM19\r2\r3\r58,21\r--------\rsprzedane\r\r\r\r\rM20\r2\r3\r63,77\r--------\rrezerwacja\r\r\r\r\rM21\r3\r3\r71,86\r--------\rrezerwacja\r\r\r\r\rM22\r3\r3\r62,89\r--------\rsprzedane\r\r\r\r\rM23\r3\r3\r69,72\r--------\rsprzedane\r\r\r\r\rM24\r3\r4\r101,41\r--------\rsprzedane\r\r\r\r                    ";
        private const string AparmentRegex = @"([M]\d{1,2})\r(Parter|\d{1})\r(\d{1})\r(\d{2,},?\d{1,2})\r(-{8}|\d \d{3},\d{2} zł)\r(sprzedane|rezerwacja|\d{3} \d{3},\d{2} zł)\r";
        public static IEnumerable<ApartmentTable> GetAparmentTables(string input)
        {
            var regex = new Regex(AparmentRegex);          
            var matches = regex.Matches(input);
            var list = new List<ApartmentTable>();

            if(matches.Any(x => x.Success == true))
            {
                foreach(var group in matches.ToList())
                {
                    list.Add(new ApartmentTable()
                    {
                        Number = group.Groups[1].Value,
                        Floor = group.Groups[2].Value,
                        RoomsCount = group.Groups[3].Value,
                        Area = group.Groups[4].Value,
                        PriceForSquareMeter = group.Groups[5].Value,
                        PriceOrStatus = group.Groups[6].Value
                    });
                }
            }
            return list;
        }
    }
}
