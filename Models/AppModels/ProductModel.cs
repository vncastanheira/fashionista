using Fashionista.Enums;

namespace Fashionista.Models.AppModels
{
    public class ProductModel : IModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; } = 0M;
        public string Description { get; set; }
        public string Category { get; set; }
        public bool OnSale { get; set; }
        public Sex Sex { get; set; } = Sex.Unisex;  
    }
}
