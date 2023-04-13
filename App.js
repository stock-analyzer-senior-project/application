import * as React from "react";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Purpose" component={PurposeScreen} />
        <Stack.Screen name="Explanation" component={ExplanationScreen} />
        <Stack.Screen name="How" component={HowScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
      <Button title="Login"
      onPress={() => navigation.navigate("Login", {name: "Jane" })} 
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
  return <Text>This is the search screen</Text>;
};

const onPress = () => alert("Pick up the phone baby");

const LoginScreen = ({navigation, route}) => {
  return(
    <View>
    <Text style={styles.title}> Welcome Back! </Text>
    <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Email: </Text>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
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
       returnKeyType="done"
       secureTextEntry
       style={styles.textInput}
       textContentType="password"
      />
    </View>
  </Pressable>
  <TouchableOpacity style={styles.submitButton} onPress={onPress}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign : "center",
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
    color: '#FFFFFF',
    flex: 1,
  },
  form: {
    alignItems: 'center',
    backgroundColor: 'rgb(58, 58, 60)',
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    borderWidth : 2,
    width : 300,
    left : "38%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal : 16,
    marginBottom : 10,
  },
  label: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  submitButton : {
    height : 50,
    width : 150,
    left : "50%",
    backgroundColor: '#646464',
    borderRadius: 8,
  },
  buttonText : {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
    textAlign : "center",
    textAlignVertical : "center"
  }
});
