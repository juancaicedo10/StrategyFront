import { environment } from '../../../environment/environment';

export class EnvResolver {
  resolveUrl(): string {
    return environment.apiUrl;
  }
}
