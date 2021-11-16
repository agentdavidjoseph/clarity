/**
 * Storybook Web Dev Server
 *
 * Provides a local env for running storybook with modern ESM JavaScript
 */

import { storybookPlugin } from '@web/dev-server-storybook';
import { rollupAdapter } from '@web/dev-server-rollup';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import image from '@rollup/plugin-image';
import styles from 'rollup-plugin-styles';
import url from '@rollup/plugin-url';
import baseConfig from './web-dev-server.config.mjs';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: './',
  mimeTypes: {
    '**/*.json': 'js',
    '**/*.css': 'js',
    '.mp3': 'audio/mpeg',
  },
  plugins: [
    storybookPlugin({ type: 'web-components', configDir: '.storybook' }),
    esbuildPlugin({ ts: true, json: true, target: 'auto' }),
    rollupAdapter(styles()),
    rollupAdapter(image()),
    rollupAdapter(
      url({
        fileName: '[name][extname]',
        include: '**/*.mp3',
        limit: 100000,
      })
    ),
    ...baseConfig.plugins,
  ],
});
