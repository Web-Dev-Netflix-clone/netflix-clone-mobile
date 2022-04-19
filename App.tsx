import { Provider } from 'react-redux';
import { store } from './src/state/store';

import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import useCachedResources from './src/hooks/useCachedResources';
import StartupScreen from './src/screens/StartUpScreen';
import { Navigation } from './src/navigation';

export default function App() {
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
}
