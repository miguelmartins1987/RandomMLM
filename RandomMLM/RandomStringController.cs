using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;

namespace RandomMLM
{
    [Route("api/[controller]")]
    [ApiController]
    public class RandomStringController : ControllerBase
    {
        private readonly Dictionary<string, string> characterSetsMap = new Dictionary<string, string>()
        {
            { "uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
            { "lowercase", "abcdefghijklmnopqrstuvwxyz" },
            { "digits", "0123456789" },
            { "dash", "-" },
            { "underscore", "_" },
        };

        [HttpPost]
        public string Post([FromBody] RandomStringOptions randomStringOptions)
        {
            string characters = "";
            if (randomStringOptions.CharacterSets == null || randomStringOptions.CharacterSets.Length == 0)
            {
                throw new Exception("No character sets specified.");
            }
            foreach (string characterSet in randomStringOptions.CharacterSets)
            {
                characters += characterSetsMap[characterSet];
            }
            HttpClient httpClient = new HttpClient();
            int min = 0;
            int max = characters.Length - 1;
            int[] indexes = min == max ? Enumerable.Repeat(0, randomStringOptions.StringLength).ToArray() : httpClient.GetFromJsonAsync<int[]>(string.Format("http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min={0}&max={1}&count={2}", min, max, randomStringOptions.StringLength)).Result;
            string result = "";
            foreach (int index in indexes)
            {
                result += characters[index];
            }
            return result;
        }
    }
}
