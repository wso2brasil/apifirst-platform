import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://localhost:9443/oauth2/token',
  redirectUri: 'http://localhost:4200',
  strictDiscoveryDocumentValidation: false,
  clientId: '5E_72wXxBAP8RC9n4mnfQvfRGSoa',
  scope: 'openid profile email',
}