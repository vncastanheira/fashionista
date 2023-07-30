using Dapper;
using Fashionista.Models;
using Fashionista.Models.AppModels;
using Microsoft.Data.Sqlite;

namespace Fashionista
{
    public class AppDbConnection : SqliteConnection
    {
        public AppDbConnection()
        {
            ConnectionString = "Data Source=fashionista.db";
        }
    }
}
