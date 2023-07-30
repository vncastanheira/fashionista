using Fashionista.Models.AppModels;

namespace Fashionista.Services
{
    public class ProductService
    {
        public IEnumerable<ProductModel> Get(Guid? id = null)
        {
            return new List<ProductModel>()
            {
                new ProductModel { ProductID = new Guid(), Name = ""},
                new ProductModel { ProductID = new Guid(), Name = ""},
                new ProductModel { ProductID = new Guid(), Name = ""},
                new ProductModel { ProductID = new Guid(), Name = ""},
                new ProductModel { ProductID = new Guid(), Name = ""},
            };
        }
    }
}
