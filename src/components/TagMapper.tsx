import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TYPOGRAPHY } from '../global/styles/typography';
import { randomIntFromRange } from '../utils/utils';

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
  const [displayTags, setDisplayTags] = useState<string[]>([]);

  useEffect(() => {
    const randomTagArray = [];

    for (let i = 0; i < 4; i++) {
      randomTagArray.push(tags[randomIntFromRange(0, tags.length - 1)]);
    }

    setDisplayTags(randomTagArray);
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      {displayTags.map((tag, i) => {
        if (i === displayTags.length - 1) {
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
