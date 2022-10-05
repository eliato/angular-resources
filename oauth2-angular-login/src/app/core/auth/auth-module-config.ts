import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://cognito-idp.us-east-1.amazonaws.com/us-east-1_uAjHMdVSj'],
    sendAccessToken: true,
  }
};
