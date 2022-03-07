import { StyleSheet } from 'react-native';
import { GLOBAL } from './global';

// Dit bestand moet nog aangepast worden naar de wensen van ons project
// Laten we al deze GLOBALE styles de komende dagen overleggen en
// helemaal naar het project inrichten. We kunnen hier ook altijd dingen
// toevoegen wanneer je iets vaak hergebruikt.

export const IMGSTYLES = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  headerLogo: {
    width: 90,
    height: 35,
    resizeMode: 'contain',
  },
  mainImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: GLOBAL.SPACING.sm,
  },
  smallImage: {
    flex: 1,
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  responsive: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
