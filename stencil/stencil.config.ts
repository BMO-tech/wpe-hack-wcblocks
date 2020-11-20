import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@wcblocks/components',
      proxiesFile: './react/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ]
};