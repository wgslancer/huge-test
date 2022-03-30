export type NavType = {
  id: number;
  key: string;
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
