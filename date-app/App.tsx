import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [serverDate, setServerDate] = useState<Date | null>(null);
  const [dbDate, setDbDate] = useState<Date | null>(null);

  const fetchDate = async () => {
    const response = await fetch("http://localhost:8080/date");
    const data = await response.json();

    setServerDate(new Date(data.serverDate));
    setDbDate(new Date(data.dbDate));
  };
  return (
    <View style={styles.container}>
      <StyledButton onPress={fetchDate}>Fetch date</StyledButton>
      {serverDate && <DateDisplay date={serverDate} source="server" />}
      {dbDate && <DateDisplay date={dbDate} source="database" />}
      <StatusBar style="auto" />
    </View>
  );
}

type DateDisplayProps = {
  date: Date;
  source: string;
};
const DateDisplay: FC<DateDisplayProps> = ({ date, source }) => {
  return (
    <Text>
      Date from {source}: {date.toLocaleString()}
    </Text>
  );
};

const StyledButton: FC<TouchableOpacity["props"]> = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0d0099",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
