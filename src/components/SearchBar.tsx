import { View, TextInput } from 'react-native';
import React from 'react';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

import IonIcons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View
      style={[
        GLOBAL.LAYOUT.rowCenter,
        {
          backgroundColor: TYPOGRAPHY.COLOR.GreySecondary,
          paddingVertical: GLOBAL.SPACING.sm,
          paddingHorizontal: GLOBAL.SPACING.lg,
          justifyContent: 'space-between',
        },
      ]}>
      <IonIcons name='search' size={20} color={TYPOGRAPHY.COLOR.GreyLight} />
      <TextInput
        style={{ marginLeft: -60 }}
        placeholder='Search for a show, movie, genre etc.'
        placeholderTextColor={TYPOGRAPHY.COLOR.GreyLight}
      />
      <IonIcons
        name='mic-outline'
        size={20}
        color={TYPOGRAPHY.COLOR.GreyLight}
      />
    </View>
  );
};

export default SearchBar;
