import * as React from "react";
import { Feather } from "react-native-feather";
import { Button } from "react-native";
//import { SearchBar } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, Pressable, TouchableOpacity, FlatList } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//import filter from "lodash.filter";
import { TextInputProps } from "react-native";
import SearchFilter from "./components/SearchFilter";
import { auth } from "./firebase";
//import {database as db} from "./firebase"
import { Component } from "@firebase/component";
import { set } from "lodash";
import { data } from "./db";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Purpose" component={PurposeScreen} />
        <Stack.Screen name="Explanation" component={ExplanationScreen} />
        <Stack.Screen name="How" component={HowScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Stock Information" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//***Each Page of the Application***

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Our purpose"
        onPress={() => navigation.navigate("Purpose", { name: "Jane" })}
      />
      <Button
        title="What is ESG Data"
        onPress={() => navigation.navigate("Explanation", { name: "Jane" })}
      />
      <Button
        title="How to Invest with ESG Data"
        onPress={() => navigation.navigate("How", { name: "Jane" })}
      />
      <Button
        title="Company Search"
        onPress={() => navigation.navigate("Search", { name: "Jane" })}
      />
    </View>
  );
};
const PurposeScreen = ({ navigation, route }) => {
  return (
    <Text>
      The purpose of this application is to inform users about what ESG data is
      and how they can use it in informing their investment decisions.
    </Text>
  );
};
const ExplanationScreen = ({ navigation, route }) => {
  return (
    <Text style={styles.text}>
      ESG stands for Environmental, Social, and Governance, and ESG data refers
      to information that is relevant to these three factors. Specifically, ESG
      data includes information related to a company's environmental impact,
      social responsibility, and corporate governance practices. Environmental
      data may include a company's carbon emissions, energy use, waste
      management practices, and water usage, among other factors. Social data
      may include information about a company's labor practices, human rights
      policies, community engagement, and diversity and inclusion efforts.
      Governance data may include details about a company's management
      structure, board composition, executive compensation, and ethical
      standards. ESG data is increasingly being used by investors and other
      stakeholders to evaluate a company's overall sustainability and potential
      long-term performance. Companies that prioritize ESG factors are seen as
      more responsible and better positioned for long-term success in a rapidly
      changing business landscape.
    </Text>
  );
};
const HowScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const SearchScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  return (
    <View style={{ margin: 15, width: "90%" }}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          width: "102%",
          backgroundColor: "#d9dbda",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        {/* Feather is the search bar */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1, marginRight: 4 }}
        />
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={{ fontsize: 15 }}
          placeholder="Search Ticker Here"
        />
      </View>
      <SearchFilter data={data} input={input} setInput={setInput} />
    </View>
  );
};
//This is where clicking on a ticker will take you
const InfoScreen = ({ navigation, route }) => {
  //Before returning here, we need to update info based on what stock it is
  console.log(route.params.paramKey);
  // return <Text>{route.params.paramKey.Symbol}</Text>;
  return (
    <View>
      <Text>Company: {route.params.paramKey.Name}</Text>
      <Text>Company: {route.params.paramKey.Symbol}</Text>
      <Text>ESG Rating: {route.params.paramKey.Rating}</Text>
    </View>
  );
};

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in as: ", user.email);
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View>
      <Text style={styles.title}> Welcome Back! </Text>
      <Pressable>
        <View style={styles.form}>
          <Text style={styles.label}>Email: </Text>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.textInput}
            textContentType="username"
          />
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.form}>
          <Text style={styles.label}>Password: </Text>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            value={password}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="done"
            secureTextEntry
            style={styles.textInput}
            textContentType="password"
          />
        </View>
      </Pressable>
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

//***STYLESHEET***//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    margin: 20,
    flex: 1,
    fontSize: 36,
    left: "50%",
  },
  text: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "#FFFFFF",
    flex: 1,
  },
  form: {
    alignItems: "center",
    backgroundColor: "rgb(58, 58, 60)",
    borderRadius: 8,
    flexDirection: "row",
    height: 48,
    borderWidth: 2,
    width: 300,
    left: "62%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  label: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    width: 80,
  },
  submitButton: {
    height: 50,
    width: 150,
    left: "30%",
    top: "10%",
    backgroundColor: "#646464",
    borderRadius: 25,
  },
  registerButton: {
    height: 50,
    width: 150,
    left: "30%",
    top: "12%",
    backgroundColor: "#646464",
    borderRadius: 25,
  },
  buttonText: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 20,
    width: 80,
    left: "22%",
    top: "30%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
