import { BottomTabParams, DrawerTabParams } from './../navigation/navigation.d';

export type NavigationScreenBottom<T extends BottomTabParams> = {
  [K in keyof T]: K;
}[keyof T];

export type NavigationScreenBottom<T extends DrawerTabParams> = {
  [K in keyof T]: K;
}[keyof T];
