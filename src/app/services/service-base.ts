export abstract class ServiceBase {
  static API_URL = "http://localhost:1337/api";
  static getUrl(path: string) {
    return `${this.API_URL}${path}`;
  }
}
