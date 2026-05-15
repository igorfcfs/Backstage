import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/world-clock',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/WorldClockPage').then(m => (
        <m.WorldClockPage />
      )),
  },
});

export const worldClockPlugin = createFrontendPlugin({
  pluginId: 'world-clock',
  extensions: [page],
  routes: {
    root: rootRouteRef,
  },
});