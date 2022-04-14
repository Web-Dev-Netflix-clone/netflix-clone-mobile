import React from 'react';
import PressableCard from '../../PressableCard';
import image from '../../../assets/images/posters/stranger-things.jpg';
import { Image, View } from 'react-native';
import { GLOBAL } from '../../../global/styles/global';
import { useNavigation } from '@react-navigation/native';

interface IOnlyOnNetflix {
  goTo: { key: string; params?: any };
}

const OnlyOnNetflix = ({ goTo }: IOnlyOnNetflix) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: GLOBAL.SPACING.sm }}>
      <PressableCard
        background={image}
        onClick={() => navigation.navigate(goTo)}
        height={300}
        width={150}>
        <Image
          style={{
            height: 25,
            width: 25,
            position: 'absolute',
            top: 10,
            left: 5,
          }}
          source={require('../../../assets/netflix-logos/netflix-logo-png-symbol-512x512.png')}
        />
      </PressableCard>
    </View>
  );
};

export default React.memo(OnlyOnNetflix);
