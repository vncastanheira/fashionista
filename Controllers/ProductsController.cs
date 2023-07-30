using Fashionista.Models.AppModels;
using Fashionista.Services;
using Microsoft.AspNetCore.Mvc;

namespace Fashionista.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public IEnumerable<ProductModel> FetchAll()
        {
            return _productService.Get();
        }
    }
}
