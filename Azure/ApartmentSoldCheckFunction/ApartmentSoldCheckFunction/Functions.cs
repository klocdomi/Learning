using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ApartmentSoldCheckFunction.Models;
using ApartmentSoldCheckFunction.Utilities;
using ApartmentSoldCheckFunction.Endpoints;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace ApartmentSoldCheckFunction
{
    public static class Functions
    {
        [FunctionName("ApartmentSoldCheck")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "apartment/sold")] HttpRequest req)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var data = JsonConvert.DeserializeObject<Apartment>(requestBody);

            var requestSender = new RequestSender();
            var endpoint = ZygmuntowskaEndpoints.Get(ZygmuntowskaEndpoints.ZygmuntowskaEndpointName.GetApartmentList);
            var response = requestSender.SendRequest(endpoint).Content.ReadAsStringAsync().Result;

            try
            {
                var table = HtmlParser.ParseTable(response).Replace("\n", "");

                var aparmentsList = ApartmentListParser.GetAparmentTables(table);

                var searched = aparmentsList.Where(x => x.Number == data.Number).FirstOrDefault();

                var responseMessage = searched.PriceOrStatus != data.PriceOrStatus
                    ? $"Apartment {data.Name} number {data.Number} status has changed to {searched.PriceOrStatus}"
                    : string.Empty;

                return new OkObjectResult(responseMessage);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult($"{ex.Message}");
            }
        }
    }
}
