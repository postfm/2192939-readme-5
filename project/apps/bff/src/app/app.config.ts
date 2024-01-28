export enum ApplicationServiceURL {
  User = 'http://localhost:3333/api/user',
  Public = 'http://localhost:3000/api/publics',
  Uploader = 'http://localhost:3002/api/files',
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 5000;
