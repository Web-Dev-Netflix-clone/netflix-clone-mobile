import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { GLOBAL } from '../styles/global';

export const PressableText = (
  props: TouchableOpacityProps & {
    text: string;
    textStyle?: TextStyle;
    onClick?: () => void;
  }
) => {
  return (
    <TouchableOpacity
      onPress={props.onClick}
      style={GLOBAL.LAYOUT.rowCenter}
      {...props}>
      <Text
        style={[
          { textDecorationLine: 'none', textAlign: 'center' },
          props?.textStyle,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
