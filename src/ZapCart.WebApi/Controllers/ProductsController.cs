using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using ZapCart.WebApi.Models;

namespace ZapCart.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private static readonly IDictionary<int, Product> Products = new Dictionary<int, Product>
        {
            { 1, new Product(1, "Apple iPhone 6", "It's an iPhone", 500m) },
            { 2, new Product(2, "Google Nexus 5", "It's an Android", 250m) }
        };

        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return Products.Values;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return Products[id];
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product product)
        {
            Products.Add(Products.Max(p => p.Key) + 1, product);
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
            Products.Remove(id);
        }
    }
}
