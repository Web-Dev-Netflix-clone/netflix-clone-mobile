import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PressableCard from '../../components/PressableCard';
import { GLOBAL } from '../../global/styles/global';
import { TYPOGRAPHY } from '../../global/styles/typography';
import { selectMyListMovies } from '../../state/selectors/selectors';
import DrawerTopBar from './components/DrawerTopBar';

const MyListDrawer = () => {
  const myListMovies = useSelector(selectMyListMovies);

  return (
    <>
      <DrawerTopBar title={'My List'} rightIconName={'search'} />

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: GLOBAL.SPACING.md,
          paddingHorizontal: GLOBAL.SPACING.md,
          backgroundColor: TYPOGRAPHY.COLOR.Black,
        }}>
        <View style={GLOBAL.LAYOUT.imageGrid}>
          {myListMovies.map(({ id, poster }: any) => {
            return (
              <PressableCard
                key={id}
                background={poster}
                wrapperWidth='30%'
                width='100%'
                height={200}
                cardRadius={0}
                style={{ backgroundColor: TYPOGRAPHY.COLOR.Transparent }}
              />
            );
          })}
        </View>
      </DrawerContentScrollView>
    </>
  );
};

export default MyListDrawer;
