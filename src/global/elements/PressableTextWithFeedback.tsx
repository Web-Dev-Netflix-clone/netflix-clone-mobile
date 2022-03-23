import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

export const PressableText = (
  props: TouchableOpacityProps & {
    text: string;
    textStyle?: TextStyle;
    onClick?: () => void;
    style?: ViewStyle;
  }
) => {
  return (
    <View style={props.style ? props.style : {}}>
      <TouchableOpacity onPress={props.onClick} {...props}>
        <Text
          style={[
            { textDecorationLine: 'none', textAlign: 'center' },
            props?.textStyle,
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
