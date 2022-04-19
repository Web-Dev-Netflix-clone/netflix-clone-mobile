import { StyleSheet } from 'react-native';
import { GLOBAL } from './global';

export const IMGSTYLES = StyleSheet.create({
  tinyLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  headerLogo: {
    width: 160,
    height: 70,
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
