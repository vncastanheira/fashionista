using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper;
using Fashionista.Models.AppModels;

namespace Fashionista.Services
{
    public class ProductService
    {
        private readonly AppDbConnection db;

        public ProductService(AppDbConnection dbConnection)
        {
            db = dbConnection;
        }

        public async Task<IEnumerable<ProductModel>> Get(Guid? id = null)
        {
            string sql = @"
                SELECT  ID, 
                        NAME,
                        PRICE,
                        DESCRIPTION,
                        CATEGORY,
                        ONSALE,
                        SEX
                FROM PRODUCTS";

            return await db.QueryAsync<ProductModel>(sql);
        }
    }
}
