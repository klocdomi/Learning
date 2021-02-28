using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using ApartmentSoldCheckFunction.Endpoints;

namespace ApartmentSoldCheckFunction.Utilities
{
    public class ContentFactory
    {
        public StringContent CreateJsonContent<T>(T body, Endpoint endpoint) where T : class
        {
            var serializedBody = JsonConvert.SerializeObject(body);
            var content = new StringContent(serializedBody, Encoding.UTF8, "application/json");
            AddHeader(content, endpoint);
            return content;
        }

        private void AddHeader(StringContent content, Endpoint endpoint)
        {
            if (endpoint.Header != null)
                content.Headers.Add(endpoint.Header.Name, endpoint.Header.Value);
        }
    }
}
