using System.Collections.Generic;

namespace ZapCart.WebApi.Models
{
    public class Product
    {
        public Product(int id, string name, string description, decimal price, IEnumerable<string> categories)
        {
            Id = id;
            Name = name;
            Description = description;
            Price = price;
            Categories = categories;
        }

        public int Id { get; private set; }

        public string Name { get; private set; }

        public string Description { get; private set; }

        public decimal Price { get; private set; }

        public IEnumerable<string> Categories { get; private set; }
    }
}
