import React from 'react';
import { PressableCard } from '../PressableCard';
import image from '../../../assets/images/posters/stranger-things.jpg';
import { Image } from 'react-native';

export const OnlyOnNetflix = ({ item }: { item: any }) => (
  <PressableCard
    background={image}
    onClick={() => console.log('click')}
    height={300}
    width={150}>
    <Image
      style={{ height: 25, width: 25, position: 'absolute', top: 10, left: 5 }}
      source={require('../../../assets/netflix-logos/netflix-logo-png-symbol-512x512.png')}
    />
  </PressableCard>
);
