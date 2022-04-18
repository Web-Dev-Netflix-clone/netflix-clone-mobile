import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { GLOBAL } from '../../../global/styles/global';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { useActions } from '../../../hooks/useActions';
import { IMovie } from '../../../state/actionsInterfaces/moviesInterfaces';

interface ISearchMovieBox {
  image: string | ImageSourcePropType;
  title: string;
  movie: IMovie;
}

const SearchMovieBox = ({ image, title, movie }: ISearchMovieBox) => {
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
          color={TYPOGRAPHY.COLOR.White}
          size={40}
          onPress={() => ({})}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchMovieBox;
