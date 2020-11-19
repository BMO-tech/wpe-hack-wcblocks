import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};