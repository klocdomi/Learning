using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApartmentSoldCheckFunction.Models
{
    public class Apartment
    {
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("number")]
        public string Number { get; set; }
        [JsonProperty("status")]
        public string PriceOrStatus { get; set; }
    }
}
