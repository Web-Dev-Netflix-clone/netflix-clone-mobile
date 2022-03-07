// Dit bestand moet nog aangepast worden naar de wensen van ons project
// Laten we al deze GLOBALE styles de komende dagen overleggen en
// helemaal naar het project inrichten. We kunnen hier ook altijd dingen
// toevoegen wanneer je iets vaak hergebruikt.

const COLOR = {
  // CTA
  White: '#FFFFFF',
  Black: '#000000',
  BlackSecondary: '#060606',

  Dark: '#141414',
  DarkSecondary: '#181818',
  DarkTertiary: '#333333',

  Grey: '#808080',
  GreySecondary: '#4f5054',
  GreyLight: '#c1c1c1',

  Neutral: '#fafafa',

  RedPrimary: '#E50914',
  RedSecondary: '#ac1307',
  RedTertiary: '#b40813',

  Green: '#46d369',
  GreenSecondary: '#1cb831',

  Blue: '#0073E6',
  BlueSecondary: '#017af3',
  BlueDark: '#082452',
  Border: '#E7E7E8',

  Transparent: 'transparent',
};

const FONT_SIZES = {
  xxxsm: 4,
  xxsm: 6,
  xsm: 10,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 80,
};

const FONT = {
  PrimaryRegular: 'netflix-sans-medium',
  PrimaryLight: 'netflix-sans-light',
  PrimaryBold: 'netflix-sans-bold',
  default: {
    fontFamily: 'netflix-sans-medium',
    fontSize: 14,
  },
  body: {
    fontFamily: 'netflix-sans-medium',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
  },
  h1: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 26,
    marginBottom: 10,
  },
  h2: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 20,
    marginBottom: 10,
  },
  h3: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 14,
    marginBottom: 10,
  },
  h4: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 10,
    marginBottom: 10,
  },

  subtitle: {
    color: COLOR.GreySecondary,
    fontFamily: 'netflix-sans-medium',
    fontSize: 12,
    letterSpacing: 0.2,
    marginBottom: 8,
  },
  input: {
    height: 36,
    fontSize: 14,
    borderColor: '#b7c5c6',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
};

const BUTTON = {
  radius: 5,
  primary: {
    height: 48,
    borderWidth: 0,
    borderRadius: 0,
    paddingVertical: 6,
    justifyContent: 'center',
    paddingHorizontal: 15,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    text: {
      fontSize: 14,
    },
  },
};

const ELEMENTS = {
  CategoryIcons: { marginRight: 20 },
  Card: { marginBottom: 30 },
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  ELEMENTS,
  FONT_SIZES,
};

export { TYPOGRAPHY };
