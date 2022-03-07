import { Provider } from "react-redux";
import { store } from "./src/state/store";
import { Navigation } from "./src/navigation";

import useCachedResources from "./src/hooks/useCachedResources";
import StartupScreen from "./src/screens/StartupScreen";

export default function App() {
  return <MainScreen />;
}

const MainScreen = () => {
  // Hier worden de font etc geladen
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      // ReduxStore wrapped de gehele navigatie dus de volledige app
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    // Als de font enzo nog niet zijn geladen zie je een start / laad scherm
    return <StartupScreen />;
  }
};
