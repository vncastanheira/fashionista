namespace Fashionista.Models.AppModels
{
    public class ImageProductModel : IModel
    {
        public int ID { get; set; }
        public int ProductID { get; set; }
        public byte ImageBlob { get; set; }
    }
}
