import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClientClass {
  instance!: AxiosInstance;
  defaultConfig!: AxiosRequestConfig;

  url = process.env.API_URL || 'http://wp.wcblocks';
  prefix = process.env.API_PREFIX || 'wp-json/wp/v2';

  constructor(prefix?: string) {
    this.defaultConfig = {
      baseURL: `${this.url}/${prefix || this.prefix}`,
    };
    this.instance = axios.create(this.defaultConfig);
  }

  async get(path: string): Promise<any> {
    try {
      const resp: AxiosResponse = await this.instance.get(path);
      return resp.data;
    } catch (e) {
      console.log('ERROR', e);
    }
  }
}

export const ApiClient = new ApiClientClass();
export type { AxiosResponse };
