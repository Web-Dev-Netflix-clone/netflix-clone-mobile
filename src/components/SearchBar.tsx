import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { GLOBAL } from '../global/styles/global';

import IonIcons from 'react-native-vector-icons/Ionicons';
import { useActions } from '../hooks/useActions';

const SearchBar = () => {
  const { updateSearchInput } = useActions();
  const [searchInput, setSearchInput] = useState('');

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
        value={searchInput}
        onChangeText={(text) => {
          setSearchInput(text);
          updateSearchInput(searchInput);
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
