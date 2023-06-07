import config from "../../config";
import { IMessage, INotification } from "../../const";
import httpInstance, { IHttp } from "./http"; // assuming http adapter is in a separate file

class Api {
  private static instance: Api;
  private http: IHttp;

  private constructor(http: IHttp) {
    this.http = http;
  }

  public static getInstance(): Api {
    if (!Api.instance) {
      const http = httpInstance({ baseURL: config.apiBaseUrl });
      Api.instance = new Api(http);
    }
    return Api.instance;
  }

  public async getLogs(): Promise<INotification[]> {
    const response = await this.http.get<INotification[]>(`logs`);
    return response;
  }

  public async sendMessage(payload: IMessage): Promise<any> {
    const response = await this.http.post(`logs`, payload);
    return response;
  }

  // add other methods for other endpoints as needed
}

export default Api.getInstance();
