import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // Hier moeten we nog de juiste fonts toevoegen!
  // Met deze functie kan je ook bijvoorbeeld een user uit de localstorage
  // halen wanneer je de app opstart.

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await Font.loadAsync({
          // 'open-sans': require('../../assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
          // 'open-sans-medium': require('../../assets/fonts/Open_Sans/OpenSans-Medium.ttf'),
          // 'open-sans-bold': require('../../assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
          // impact: require('../../assets/fonts/impact/impact.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
