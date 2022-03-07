import {
  RootStackParams,
  BottomTabParams,
  DrawerStackParams,
} from './../navigation/navigation.d';

// This work for typing routes but why? => ask Jens or Remco
export type NavigationScreen<T extends RootStackParams> = {
  [K in keyof T]: K;
}[keyof T];

export type NavigationScreenBottom<T extends BottomTabParams> = {
  [K in keyof T]: K;
}[keyof T];

export type NavigationScreenBottom<T extends DrawerStackParams> = {
  [K in keyof T]: K;
}[keyof T];
