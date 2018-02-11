import * as request from 'request-promise-native';


interface Tokens {
  refresh_token: string;
  token_type: string;
  access_token: string;
  expires_in: number;
}

interface Token {
  token_type: string;
  access_token: string;
  expires_in: number;
}
export class EnvatoApi {
  private static readonly appKey = 'xf9cKqLpU11SL7Feqwu0FPn7PRCOzPDG';
  private static readonly clientId = 'easy-music-uploader-q1haaron';
  private static readonly url = 'https://api.envato.com';

  static async getTokens(code: string): Promise<Tokens> {
    return request(`${this.url}/token`, {
      method: 'POST',
      body: {
        grant_type: 'authorization_code',
        code: code,
        client_id: this.clientId,
        client_secret: this.appKey
      },
      json: true
    });
  }

  static async refreshToken(refreshToken: string): Promise<Token> {
    return request(`${this.url}/token`, {
      method: 'POST',
      body: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: this.clientId,
        client_secret: this.appKey
      },
      json: true
    });
  }
  
  static async getUserInfo(token: string){
    return request(`${this.url}/v1/market/private/user/account.json`, {headers: {
        'Authorization': `Bearer ${token}`
      }})
  }
}