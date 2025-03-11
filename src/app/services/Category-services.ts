import { ServiceBase } from "./service-base";
export class CategoryServices extends ServiceBase {
  static getCategories = async () => {
    var categoriesResp = await fetch(this.getUrl("/categories?populate=*"));
    var categories = await categoriesResp.json();
    return categories;
  };
  static getImageUrl(categories: any) {
    return "http://localhost:1337" + categories.image.url;
  }
}
