export const THEME_VALUES = {
  dark: 'dark',
  light: 'light',
} as const;

export type ThemeValue = (typeof THEME_VALUES)[keyof typeof THEME_VALUES];

export const THEME_CLASS = THEME_VALUES.dark;
export const THEME_STORAGE_KEY = 'theme';
