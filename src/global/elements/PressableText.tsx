import { Text, Pressable, PressableProps, TextStyle } from 'react-native';
import { GLOBAL } from '../styles/global';

export const PressableText = (
  props: PressableProps & {
    text: string;
    textStyle?: TextStyle;
    onClick?: () => void;
  }
) => {
  return (
    <Pressable
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
    </Pressable>
  );
};
