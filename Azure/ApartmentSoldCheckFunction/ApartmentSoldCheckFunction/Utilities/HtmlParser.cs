using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using HtmlAgilityPack;

namespace ApartmentSoldCheckFunction.Utilities
{
    public static class HtmlParser
    {
        public static string ParseTable(string html)
        {
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var tables = doc.DocumentNode.SelectNodes("//table").Cast<HtmlNode>();

            var first = tables.FirstOrDefault();

            return tables.SingleOrDefault(x => x.InnerText.Contains("Numer mieszkania")).InnerText;
        }

    }
}
