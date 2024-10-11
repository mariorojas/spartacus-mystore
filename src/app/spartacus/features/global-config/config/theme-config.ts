export abstract class ThemeConfig {
  theme?: Theme;
}

export enum Theme {
  STRAWBERRIES = 'Strawberries',
  CHOCOLATE = 'Chocolate',
  ICECREAM = 'Icecream'
}

declare module '@spartacus/core' {
  interface Config extends ThemeConfig {}
}