import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { useActions } from '../../../hooks/useActions';

import { IMovieDetailsTransform } from '../../../types/data.types';

interface ISearchMovieBox {
  movie: IMovieDetailsTransform;
}

const SearchMovieBox = ({ movie }: ISearchMovieBox) => {
  const { showBottomSheet, setBottomSheetMovie } = useActions();

  return (
    <TouchableOpacity
      onPress={() => {
        setBottomSheetMovie(movie);
        showBottomSheet();
      }}>
      <View
        style={{
          ...GLOBAL.LAYOUT.rowCenter,
          justifyContent: 'space-between',
          backgroundColor: TYPOGRAPHY.COLOR.DarkTertiary,
          marginBottom: 2,
        }}>
        <Image
          style={{
            width: 150,
            height: 80,
            resizeMode: 'stretch',
            borderRadius: 4,
            marginRight: GLOBAL.SPACING.md,
          }}
          source={
            typeof movie.backdrop === 'string'
              ? { uri: movie.backdrop }
              : movie.backdrop
          }
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...TYPOGRAPHY.FONT.body,
              fontFamily: TYPOGRAPHY.FONT.PrimaryLight,
              fontSize: TYPOGRAPHY.FONT_SIZES.md,
              marginBottom: 0,
            }}>
            {movie.title.charAt(0).toUpperCase() + movie.title.substring(1)}
          </Text>
        </View>
        <IconButton
          icon='play-circle'
          color={TYPOGRAPHY.COLOR.White}
          size={40}
          onPress={() => ({})}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SearchMovieBox);
