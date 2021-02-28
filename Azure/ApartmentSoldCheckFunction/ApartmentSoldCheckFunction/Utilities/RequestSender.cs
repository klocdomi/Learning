using Polly.Extensions.Http;
using Polly.Retry;
using Polly;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using ApartmentSoldCheckFunction.Endpoints;

namespace ApartmentSoldCheckFunction.Utilities
{
    public class RequestSender
    {
        private readonly HttpClientFactory _httpClientFactory;
        private readonly ContentFactory _contentFactory;

        public RequestSender()
        {
            _httpClientFactory = new HttpClientFactory();
            _contentFactory = new ContentFactory();
        }

        public RequestSender(HttpClientFactory httpClientFactory, ContentFactory contentFactory)
        {
            _httpClientFactory = httpClientFactory;
            _contentFactory = contentFactory;
        }

        public HttpResponseMessage SendRequest(Endpoint endpoint, object body = null)
        {
            var client = _httpClientFactory.CreateClient();
            var requestContent = _contentFactory.CreateJsonContent(body, endpoint);
            return SendRequest(endpoint.HttpMethod, endpoint.CreateUri(), client, requestContent);
        }

        public HttpResponseMessage SendRequest(HttpMethod httpMethod, Uri requestUri, HttpClient httpClient, HttpContent reuqestContent = null, bool ignoreRetryPolicy = false)
        {
            var retryPolicy = ignoreRetryPolicy ? GetRetryPolicy(0) : GetRetryPolicy();

            return retryPolicy.Execute(() =>
            {
                var response = SendRequest(httpMethod, httpClient, requestUri, reuqestContent);
                return response;
            });


            HttpResponseMessage SendRequest(HttpMethod method, HttpClient client, Uri uri, HttpContent content )
            {
                switch(method)
                {
                    case HttpMethod m when m == HttpMethod.Get:
                        return  client.GetAsync(uri).Result;
                    case HttpMethod m when m == HttpMethod.Post:
                        return client.PostAsync(uri,content).Result;
                    case HttpMethod m when m == HttpMethod.Put:
                        return client.PutAsync(uri,content).Result;
                    case HttpMethod m when m == HttpMethod.Patch:
                        return client.PatchAsync(uri,content).Result;
                    case HttpMethod m when m == HttpMethod.Delete:
                        return client.DeleteAsync(uri).Result;
                    default:
                        throw new InvalidOperationException($"{method} not supported");
                }
            }
        }


        private RetryPolicy<HttpResponseMessage> GetRetryPolicy(int retryCount = 5, int secondsBetweenRetries = 5)
        {
            return HttpPolicyExtensions.HandleTransientHttpError().WaitAndRetry(retryCount, i =>
            {
                return TimeSpan.FromSeconds(secondsBetweenRetries);
            });
        }

    }
}
