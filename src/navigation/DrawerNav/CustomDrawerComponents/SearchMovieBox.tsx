import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { IconButton } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';

interface ISearchMovieBox {
  image: string | ImageSourcePropType;
  title: string;
}

const SearchMovieBox = ({ image, title }: ISearchMovieBox) => {
  return (
    <View
      style={[
        GLOBAL.LAYOUT.rowCenter,
        {
          justifyContent: 'space-between',
          backgroundColor: TYPOGRAPHY.COLOR.DarkTertiary,
          marginBottom: 2,
        },
      ]}>
      <Image
        style={[
          {
            width: 150,
            height: 80,
            resizeMode: 'stretch',
            borderRadius: 4,

            marginRight: GLOBAL.SPACING.md,
          },
        ]}
        source={typeof image === 'string' ? { uri: image } : image}
      />

      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...TYPOGRAPHY.FONT.body,
            fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
            fontSize: TYPOGRAPHY.FONT_SIZES.md,
            marginBottom: 0,
          }}>
          {title.charAt(0).toUpperCase() + title.substring(1)}
        </Text>
      </View>
      <IconButton
        icon='play-circle'
        color='#fff'
        size={40}
        onPress={() => ({})}
      />
    </View>
  );
};

export default SearchMovieBox;
