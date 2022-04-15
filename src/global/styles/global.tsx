import { StyleSheet, Platform } from 'react-native';

import { TYPOGRAPHY } from './typography';

const SPACING = {
  xxxsm: 2,
  xxsm: 4,
  xsm: 6,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 26,
  xxl: 30,
  xxxl: 38,
  xxxxl: 64,
};

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Black,
  },
  container: {
    flex: 1,
  },
  defaultContainer: {
    color: '#fff',
    flex: 1,
    paddingTop: SPACING.xxxl,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
    paddingVertical: SPACING.md,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.White,
  },
  DefaultBlack: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.Black,
  },
  Secondary: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 12,
    color: TYPOGRAPHY.COLOR.White,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    color: TYPOGRAPHY.COLOR.White,
  },
});

export const BRAND_HEADER = StyleSheet.create({
  header: {
    color: TYPOGRAPHY.COLOR.Dark,
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'impact',
    letterSpacing: 2,
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 5,
  },
});

const SHADOWS = StyleSheet.create({
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: Platform.OS === 'ios' ? 0 : 4,
  },
  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
  shadowInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
});

const GLOBAL = {
  LAYOUT,

  TEXT,
  SPACING,
  SHADOWS,
};

export { GLOBAL };
