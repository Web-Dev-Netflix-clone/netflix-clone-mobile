import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator } from './BottomTab';
import { DrawerStackParams } from './navigation';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerTabNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={({ navigation }) => ({
        headerShown: true,
        title: '',
        headerTransparent: true,
      })}>
      <Drawer.Screen name='Home' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
