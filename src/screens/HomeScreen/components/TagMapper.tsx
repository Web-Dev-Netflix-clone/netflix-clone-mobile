import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TYPOGRAPHY } from '../../../global/styles/typography';
import { randomIntFromRange } from '../../../utils/utils';

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
    let randomTagArray: Array<any> | Set<any> = [];

    while (randomTagArray.length !== 4) {
      randomTagArray.push(tags[randomIntFromRange(0, tags.length - 1)]);
      randomTagArray = new Set([...randomTagArray]);
      randomTagArray = [...randomTagArray];
    }

    setDisplayTags([...randomTagArray]);
  }, []);

  return (
    <View style={{ flexDirection: 'row' }}>
      {displayTags.map((tag, i) => {
        if (i === displayTags.length - 1) {
          return (
            <Text
              style={{ ...TYPOGRAPHY.FONT.subtitle, color: tagColor }}
              key={Math.random().toString()}>
              {tag}
            </Text>
          );
        }
        return (
          <Text
            style={{ ...TYPOGRAPHY.FONT.subtitle, color: tagColor }}
            key={Math.random().toString()}>
            {` ${tag}`}
            <Text style={{ color: symbolColor }}>{` ${symbol} `}</Text>
          </Text>
        );
      })}
    </View>
  );
};
