import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { navModule } from './modules/nav';

import { worldClockPlugin } from '../../../plugins/world-clock/src';

export default createApp({
  features: [
    catalogPlugin,
    navModule,
    worldClockPlugin,
  ],
});