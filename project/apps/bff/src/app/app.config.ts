export enum ApplicationServiceURL {
  User = 'http://localhost:3333/api/user',
  Public = 'http://localhost:4000/api/publics',
  Uploader = 'http://localhost:3500/api/files',
  Comment = 'http://localhost:4000/api/publics/:publicId/comments',
  Like = 'http://localhost:4000/api/publics/:publicId/likes',
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 5000;
