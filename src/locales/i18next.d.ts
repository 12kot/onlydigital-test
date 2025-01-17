import { resources } from './config';

import 'react-i18next';

type TResources = (typeof resources)['ru'];

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: TResources;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: TResources;
  }
}
