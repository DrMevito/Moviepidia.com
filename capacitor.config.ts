import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moviepidia.app',
  appName: 'MoviePidia',
  webDir: 'src',
  server: {
    androidScheme: 'https'
  }
};

export default config;
