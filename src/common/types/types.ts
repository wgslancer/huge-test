import { CustomTypeOptions } from 'react-i18next';

export type NavType = {
  id: number;
  key: keyof CustomTypeOptions['resources']['homepageNs'];
};
