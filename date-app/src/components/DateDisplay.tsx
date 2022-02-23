import { FC } from "react";
import { Text } from "react-native";

type DateDisplayProps = {
  date: Date;
  source: string;
};
export const DateDisplay: FC<DateDisplayProps> = ({ date, source }) => {
  return (
    <Text>
      Date from {source}: {date.toLocaleString()}
    </Text>
  );
};
