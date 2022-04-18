const COLOR = {
  White: '#FFFFFF',
  Black: '#000000',
  BlackSecondary: '#060600',

  Dark: '#141414',
  DarkSecondary: '#181818',
  DarkTertiary: '#242424',
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
  lg: 20,
  xl: 26,
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
    color: COLOR.White,
  },
  defaultBlack: {
    fontFamily: 'netflix-sans-medium',
    fontSize: 14,
    color: COLOR.Black,
  },
  defaultGrey: {
    fontFamily: 'netflix-sans-medium',
    fontSize: 14,
    color: COLOR.Grey,
  },
  body: {
    fontFamily: 'netflix-sans-medium',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
    color: COLOR.White,
  },
  h1: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 26,
    marginBottom: 10,
    color: COLOR.White,
  },
  h2: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 20,
    marginBottom: 10,
    color: COLOR.White,
  },
  h3: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 14,
    marginBottom: 10,
    color: COLOR.White,
  },
  h4: {
    fontFamily: 'netflix-sans-bold',
    fontSize: 10,
    marginBottom: 10,
    color: COLOR.White,
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

const TYPOGRAPHY = {
  COLOR,
  FONT,
  FONT_SIZES,
};

export { TYPOGRAPHY };
