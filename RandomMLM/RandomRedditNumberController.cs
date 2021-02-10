using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Json;

namespace RandomMLM
{
    [Route("api/[controller]")]
    [ApiController]
    public class RandomRedditNumberController : ControllerBase
    {
        [HttpGet]
        public int Get()
        {
            HttpClient httpClient = new HttpClient();
            int[] result = httpClient.GetFromJsonAsync<int[]>("http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=1&max=6").Result;
            return result[0];
        }
    }
}
