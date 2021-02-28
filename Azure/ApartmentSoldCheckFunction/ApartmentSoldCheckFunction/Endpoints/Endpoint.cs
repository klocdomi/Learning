using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace ApartmentSoldCheckFunction.Endpoints
{
    public class Endpoint
    {
        private const string Scheme = "https";
        public string Name { get; }
        public HttpMethod HttpMethod { get; }
        public string Host { get; }
        public string Address { get; }
        public NameValueHeaderValue Header { get; }

        public Endpoint(string name, HttpMethod httpMethod, string host, string address, NameValueHeaderValue header = null)
        {
            Name = name;
            HttpMethod = httpMethod;
            Host = host;
            Address = address;
            Header = header;
        }

        public Uri CreateUri(params string[] parameters) => CreateUri(null, parameters);

        public Uri CreateUriWithQuery(string query, params string[] parameters) => CreateUri(query, parameters);

        private Uri CreateUri(string query = null, params string[] parameters)
        {
            try
            {
                var path = string.IsNullOrEmpty(Address) ? null : string.Format(Address, parameters);
                var builder = new UriBuilder
                {
                    Scheme = Scheme,
                    Host = Host,
                    Path = path,
                    Query = query
                };
                return builder.Uri;
            }
            catch (Exception)
            {
                throw new Exception("Exception thrown during Uri creation.");
            }
        }
    }
}
