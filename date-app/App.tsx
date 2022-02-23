import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { DateDisplay } from "./src/components/DateDisplay";
import { StyledButton } from "./src/components/StyledButton";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [serverDate, setServerDate] = useState<Date | null>(null);
  const [dbDate, setDbDate] = useState<Date | null>(null);

  const fetchDate = async () => {
    setLoading(true);
    // wait 1 second to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch("http://localhost:8080/date");
    const data = await response.json();

    setServerDate(new Date(data.serverDate));
    setDbDate(new Date(data.dbDate));
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StyledButton onPress={fetchDate}>
        {loading ? <ActivityIndicator color={"#fff"} /> : "Fetch date"}
      </StyledButton>
      {serverDate && <DateDisplay date={serverDate} source="server" />}
      {dbDate && <DateDisplay date={dbDate} source="database" />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
