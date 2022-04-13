import {
  BottomTabParams,
  DrawerStackParams,
} from './../navigation/navigation.d';

export type NavigationScreenBottom<T extends BottomTabParams> = {
  [K in keyof T]: K;
}[keyof T];

export type NavigationScreenBottom<T extends DrawerStackParams> = {
  [K in keyof T]: K;
}[keyof T];
