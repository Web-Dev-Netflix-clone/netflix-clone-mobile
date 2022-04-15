import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import useCachedResources from './src/hooks/useCachedResources';
import StartupScreen from './src/screens/StartUpScreen';

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
