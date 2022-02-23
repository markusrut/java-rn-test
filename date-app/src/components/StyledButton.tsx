import { FC } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const StyledButton: FC<TouchableOpacity["props"]> = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0d0099",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
