import { CustomTypeOptions } from 'react-i18next';

export type TranslateKey = keyof CustomTypeOptions['resources']['homepageNs'];

export type NavType = {
  id: number;
  key: TranslateKey;
};

export type Feature = {
  key: string;
  titleKey: string;
  nameKey: string;
  nav: number;
  netAssets: number;
  dayChange: number;
  issued: number;
};

export enum Currency {
  'JPY' = 'ja-JP',
}
