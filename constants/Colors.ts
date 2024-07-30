/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const WHITE = '#ffffff';
export const BLACK = '#000000';

export const PRIMARY = {
  LIGHT:'#FDBA74',
  DEFAULT : '#f97316',
  DARK:'#C2410C',

}

export const GRAY = {
  LIGHT:'#E5E7EB',
  DEFAULT:'#D1D5DB',
  DARK:'#6b7280',
}

export const DANGER = {
  LIGHT:'#FCA5A5',
  DEFAULT : '#EF4444',
  DARK : '#B91C1C',
}