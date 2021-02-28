using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Linq;

namespace ApartmentSoldCheckFunction.Endpoints
{
    public static class ZygmuntowskaEndpoints
    {
        public enum ZygmuntowskaEndpointName
        {
            GetApartmentList
        }


        private static readonly List<Endpoint> endpoints = new List<Endpoint>
        {
            new Endpoint(name: ZygmuntowskaEndpointName.GetApartmentList.ToString(),
                         httpMethod: HttpMethod.Get,
                         host: "www.zygmuntowska30.pl",
                         address: null),
        };

        public static Endpoint Get(ZygmuntowskaEndpointName name)
        {
            return endpoints.FirstOrDefault(x => x.Name.Equals(name.ToString()));
        }
    }
}
