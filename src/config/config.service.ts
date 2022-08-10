export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  get(key: string): any {
    return this.envConfig[key];
  }
}
