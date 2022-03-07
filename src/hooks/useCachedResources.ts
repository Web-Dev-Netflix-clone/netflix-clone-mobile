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
          'netflix-sans-light': require('../../assets/fonts/netflix-sans/netflix-sans-light.otf'),
          'netflix-sans-medium': require('../../assets/fonts/netflix-sans/netflix-sans-medium.otf'),
          'netflix-sans-bold': require('../../assets/fonts/netflix-sans/netflix-sans-bold.otf'),
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
