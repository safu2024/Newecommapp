export abstract class ServiceBase {
  static API_URL = "https://committed-cuddle-c8ed3640e9.strapiapp.com/api";
  static getUrl(path: string) {
    return `${this.API_URL}${path}`;
  }
}
