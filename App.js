import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch("http://reactnative.dev/movies.json");
      const json = await response.json();
    } catch (err) {
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Picker
        selectedValue={selectedCompany}
        onValueChange={(itemValue) => setSelectedCompany(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>{" "}
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
