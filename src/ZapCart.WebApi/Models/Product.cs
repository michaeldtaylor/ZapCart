namespace ZapCart.WebApi.Models
{
    public class Product
    {
        public Product(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }

        public int Id { get; private set; }

        public string Name { get; private set; }

        public string Description { get; private set; }
    }
}
