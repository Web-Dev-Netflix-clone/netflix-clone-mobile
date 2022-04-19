import React from 'react';
import { View, TextInput } from 'react-native';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { GLOBAL } from '../../../global/styles/global';

import IonIcons from 'react-native-vector-icons/Ionicons';
import { useActions } from '../../../hooks/useActions';

const SearchBar = () => {
  const { updateSearchInput } = useActions();

  return (
    <View
      style={{
        ...GLOBAL.LAYOUT.rowCenter,
        backgroundColor: TYPOGRAPHY.COLOR.GreySecondary,
        paddingVertical: GLOBAL.SPACING.sm,
        paddingHorizontal: GLOBAL.SPACING.lg,
        justifyContent: 'space-between',
        marginBottom: GLOBAL.SPACING.sm,
      }}>
      <IonIcons name='search' size={20} color={TYPOGRAPHY.COLOR.GreyLight} />
      <TextInput
        style={{ marginLeft: -60, color: TYPOGRAPHY.COLOR.White }}
        placeholder='Search for a show, movie, genre etc.'
        placeholderTextColor={TYPOGRAPHY.COLOR.GreyLight}
        onChangeText={(text) => {
          updateSearchInput(text);
        }}
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
