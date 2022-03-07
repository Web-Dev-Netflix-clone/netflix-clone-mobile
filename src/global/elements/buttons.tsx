import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

// Nog even kijken of we deze gaan gebruiken of gewoon aparte componenten voor knoppen?
// Ik heb dit ook gewoon overgenomen van een ander project maar het kan misschien wel
// handig zijn om dit allemaal in een file te hebben.

import { CustomText } from './customText';
import { GLOBAL } from '../styles/global';

type Callback = () => any;
export interface IDefaultButton {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
  icon?: unknown;
}

export const DefaultButton = ({
  title,
  onClick,
  style,
  icon,
}: IDefaultButton) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.SHADOWS.shadowLight, style]}
    onPress={() => onClick()}>
    {icon && icon}
    <CustomText style={GLOBAL.CTA.Style.primaryText}>{title}</CustomText>
  </TouchableOpacity>
);
