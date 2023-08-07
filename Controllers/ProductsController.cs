﻿using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<IEnumerable<ProductModel>> FetchAll()
        {
            return await _productService.Get();
        }
    }
}
