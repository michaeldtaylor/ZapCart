using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using ZapCart.WebApi.Models;

namespace ZapCart.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            yield return new Product(1, "Apple iPhone 6", "It's an iPhone");
            yield return new Product(2, "Google Nexus 5", "It's an Android");
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Product value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
