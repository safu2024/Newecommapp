import { ServiceBase } from "./service-base";
export class ProductServices extends ServiceBase {
  static getProducts = async () => {
    var productsResp = await fetch(this.getUrl("/products?populate=*"));
    var products = await productsResp.json();
    return products;
  };
  static getImageUrl(products: any) {
    return  products.image.url;
  }
  static getProductById = async (id: string) => {
    var productResp = await fetch(this.getUrl(`/products/${id}?populate=*`));
    var product = await productResp.json();
    return product;
  };
  static getProductByCategory = async (name: string) => {
    var catProductResp = await fetch(
      this.getUrl(`/products?filters[category][$eq]=${name}&populate=*`)
    );
    var catProducts = await catProductResp.json();
    return catProducts;
  };
}
