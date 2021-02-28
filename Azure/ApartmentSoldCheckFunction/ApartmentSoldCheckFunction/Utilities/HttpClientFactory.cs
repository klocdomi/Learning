using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;

namespace ApartmentSoldCheckFunction.Utilities
{
    public class HttpClientFactory : IHttpClientFactory
    {
        public HttpClient CreateClient(string name)
        {
            return new HttpClient();
        }
    }
}
