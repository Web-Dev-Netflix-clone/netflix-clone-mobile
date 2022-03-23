import {
  Text,
  Pressable,
  PressableProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { GLOBAL } from '../styles/global';

// extending PressableProps with the & Operator

export const PressableText = (
  props: PressableProps & {
    text: string;
    textStyle?: TextStyle;
    onClick?: () => void;
    style?: ViewStyle;
  }
) => {
  return (
    <Pressable
      onPress={props.onClick}
      style={props.style ? props.style : {}}
      {...props}>
      <Text
        style={[
          { textDecorationLine: 'none', textAlign: 'center' },
          props?.textStyle,
        ]}>
        {props.text}
      </Text>
    </Pressable>
  );
};
