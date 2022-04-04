import { StyleSheet, Platform, TextStyle } from "react-native";

import { TYPOGRAPHY } from "./typography";

// Dit bestand moet nog aangepast worden naar de wensen van ons project
// Laten we al deze GLOBALE styles de komende dagen overleggen en
// helemaal naar het project inrichten. We kunnen hier ook altijd dingen
// toevoegen wanneer je iets vaak hergebruikt.

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
    backgroundColor: TYPOGRAPHY.COLOR.Dark,
  },
  container: {
    flex: 1,
  },
  defaultContainer: {
    color: "#fff",
    flex: 1,
    paddingTop: SPACING.xxxl,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: TYPOGRAPHY.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: "center",
    marginRight: TYPOGRAPHY.ELEMENTS.CategoryIcons.marginRight,
  },
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: TYPOGRAPHY.COLOR.GreyLight,
      height: TYPOGRAPHY.BUTTON.primary.height,
      borderWidth: TYPOGRAPHY.BUTTON.primary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.primary.borderRadius,
      paddingVertical: TYPOGRAPHY.BUTTON.primary.paddingVertical,
      paddingHorizontal: TYPOGRAPHY.BUTTON.primary.paddingHorizontal,
    },
    primaryText: {
      color: TYPOGRAPHY.COLOR.White,
      fontSize: (TYPOGRAPHY.BUTTON.primary.text as TextStyle).fontSize,
    },
    secondary: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderColor: TYPOGRAPHY.COLOR.GreyLight,
      backgroundColor: TYPOGRAPHY.COLOR.Dark,
      height: TYPOGRAPHY.BUTTON.secondary.height,
      borderWidth: TYPOGRAPHY.BUTTON.secondary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.secondary.borderRadius,
    },
    secondaryText: {
      textAlign: "center",
      color: TYPOGRAPHY.COLOR.Grey,
      fontSize: (TYPOGRAPHY.BUTTON.secondary.text as TextStyle).fontSize,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const TEXT = StyleSheet.create({
  Default: {
    textAlign: "left",
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.White,
  },
  DefaultBlack: {
    textAlign: "left",
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.Black,
  },
  Secondary: {
    textAlign: "left",
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    fontSize: 12,
    color: TYPOGRAPHY.COLOR.White,
  },
  Bold: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
    color: TYPOGRAPHY.COLOR.White,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: TYPOGRAPHY.COLOR.Dark,
      height: TYPOGRAPHY.FONT.input.height,
      borderRadius: TYPOGRAPHY.FONT.input.borderRadius,
      backgroundColor: TYPOGRAPHY.COLOR.Border,
      fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
      paddingHorizontal: TYPOGRAPHY.FONT.input.paddingHorizontal,
    },
    Bold: {
      fontSize: 12,
      textAlign: "left",
      borderWidth: 1,
      fontFamily: TYPOGRAPHY.FONT.PrimaryRegular,
      borderColor: TYPOGRAPHY.COLOR.Border,
      color: TYPOGRAPHY.COLOR.Dark,
    },
  }),
};

export const BRAND_HEADER = StyleSheet.create({
  header: {
    color: TYPOGRAPHY.COLOR.Dark,
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "impact",
    letterSpacing: 2,
  },
  textWithShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 5,
  },
});

const SHADOWS = StyleSheet.create({
  shadowLight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: Platform.OS === "ios" ? 0 : 4,
  },
  shadowMedium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: Platform.OS === "ios" ? 0 : 8,
  },
  shadowLarge: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: Platform.OS === "ios" ? 0 : 8,
  },
  shadowInput: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: Platform.OS === "ios" ? 0 : 8,
  },
});

const GLOBAL = {
  LAYOUT,
  ELEMENTS,
  CTA,
  TEXT,
  TEXT_INPUT,
  SPACING,
  SHADOWS,
};

export { GLOBAL };
