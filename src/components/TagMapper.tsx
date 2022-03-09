import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';

interface ITagMapper {
  tags: string[];
  symbol: string;
  tagColor: string;
  symbolColor: string;
}

export const TagMapper = ({
  tags,
  symbol,
  tagColor,
  symbolColor,
}: ITagMapper) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {tags.map((tag, i) => {
        if (i === tags.length - 1) {
          return (
            <Text
              style={[TYPOGRAPHY.FONT.subtitle, { color: tagColor }]}
              key={tag}>
              {tag}
            </Text>
          );
        }
        return (
          <Text
            style={[TYPOGRAPHY.FONT.subtitle, { color: tagColor }]}
            key={tag}>
            {` ${tag}`}
            <Text style={{ color: symbolColor }}>{` ${symbol} `}</Text>
          </Text>
        );
      })}
    </View>
  );
};
