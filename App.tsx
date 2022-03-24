import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import useCachedResources from './src/hooks/useCachedResources';
import StartupScreen from './src/screens/StartupScreen';

export default function App() {
  return <MainScreen />;
}

const MainScreen = () => {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Provider store={store}>
        <Navigation />

        <StatusBar style='light' />
      </Provider>
    );
  } else {
    return <StartupScreen />;
  }
};
