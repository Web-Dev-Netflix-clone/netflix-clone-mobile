import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

interface IHorizontalRule {
  color?: string;
  text?: string;
  style?: StyleProp<ViewStyle>;
  ruleWidth?: number;
  shadow?: boolean;
}

export const HorizontalRule = ({
  color,
  text,
  style,
  ruleWidth,
  shadow,
}: IHorizontalRule) => {
  const ruleStyle = {
    flex: 1,
    height: ruleWidth ? ruleWidth : 1,
    backgroundColor: color ? color : TYPOGRAPHY.COLOR.GreyLight,
  };

  const shadowStyles = {
    ...ruleStyle,
    backgroundColor: 'transparent',
    ...GLOBAL.SHADOWS.shadowLight,
  };

  return (
    <View style={style}>
      <View style={GLOBAL.LAYOUT.rowCenter}>
        <View style={shadow ? shadowStyles : ruleStyle} />

        {text && (
          <View>
            <Text
              style={{
                width: 50,
                textAlign: 'center',
                color: TYPOGRAPHY.COLOR.GreyLight,
              }}>
              {text}
            </Text>
          </View>
        )}

        <View style={shadow ? shadowStyles : ruleStyle} />
      </View>
    </View>
  );
};
