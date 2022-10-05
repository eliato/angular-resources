import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_uAjHMdVSj',
  clientId: '2ruo1en6tuku0jt8nilgnspqdv', // The "Auth Code + PKCE" client
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  requireHttps: true,
  redirectUri: 'http://localhost:4200/home',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding
};
