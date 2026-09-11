import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.blissfulkate.overruncloset',
  appName: 'The Overrun Closet',
  webDir: 'www',
  server: {
    url: 'https://blissful-kate.pages.dev',
    cleartext: false,
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#fff7fb'
  }
};

export default config;
