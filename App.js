import * as React from "react";
import {Feather} from "react-native-feather";
import { Button, Dimensions } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, Pressable, TouchableOpacity, FlatList } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
//import filter from "lodash.filter";
import { TextInputProps } from "react-native";
import SearchFilter from "./components/SearchFilter"
import {auth} from "./firebase"
//import {database as db} from "./firebase"
import { Component } from "@firebase/component";
import { set } from "lodash";
import { data } from "./db";
import { Image } from 'react-native'
import {useFonts} from 'expo-font'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Purpose" component={PurposeScreen} options={{ headerShown: true,
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="flag-checkered" color={color} size={size} />), }} />

      <Tab.Screen name="Explanation" component={ExplanationScreen} options={{ headerShown: true,
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bookshelf" color={color} size={size} />), }} />

      <Tab.Screen name="How" component={HowScreen} options={{ headerShown: true,
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="help" color={color} size={size} />), }} />

      <Tab.Screen name="Search" component={StockInfoStack} options={{ headerShown: true,
      tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="magnify" color={color} size={size} />), }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const StockInfoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Stock Information" component={InfoScreen}/>
    </Stack.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen name="Login" component={LoginScreen} />}
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//***Each Page of the Application***

const PurposeScreen = ({ navigation, route }) => {
  const [loaded] = useFonts({Georgia: require('./assets/Fonts/Georgia.ttf'),})
  return (
    <View style={{flex: 1,backgroundColor: '#CEE3E7'}}>
    <Text style={{fontSize:25, fontFamily:'Georgia'}}>
      The purpose of this application is to inform users about what ESG data is
      and how they can use it in informing their investment decisions.
    </Text>
    </View>
  );
};

const ExplanationScreen = ({ navigation, route }) => {
  return (
    <View style={{flex: 1,backgroundColor: '#CEE3E7'}}>
    <Text style={{fontSize:20, fontFamily:'Georgia'}}>
      ESG stands for Environmental, Social, and Governance, and ESG data refers
      to information that is relevant to these three factors. Specifically, ESG
      data includes information related to a company's environmental impact,
      social responsibility, and corporate governance practices. {'\n\n'}Environmental
      data may include a company's carbon emissions, energy use, waste
      management practices, and water usage, among other factors. Social data
      may include information about a company's labor practices, human rights
      policies, community engagement, and diversity and inclusion efforts.
      Governance data may include details about a company's management
      structure, board composition, executive compensation, and ethical
      standards. {'\n\n'}ESG data is increasingly being used by investors and other
      stakeholders to evaluate a company's overall sustainability and potential
      long-term performance. Companies that prioritize ESG factors are seen as
      more responsible and better positioned for long-term success in a rapidly
      changing business landscape.
    </Text>
    </View>
  );
};
const HowScreen = ({ navigation, route }) => {
  return <View style={{flex: 1,backgroundColor: '#CEE3E7'}}>
    <Text style={{fontSize:15, fontFamily:'Georgia'}}>This is {route.params.name}'s profile</Text>
    </View>
};

const SearchScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  return (
    <View style={{ margin: 15, width: "90%",}}>
      <View style={{padding:10,flexDirection: "row",width: "102%",backgroundColor: "#d9dbda",borderRadius:10,alignItems: "center",}}>
        {/* Feather is the search bar */}
        <Feather name="search" size={20} color="black" style={{marginLeft: 1,marginRight: 4}}/>
        <TextInput value={input} onChangeText={(text) => setInput(text)} style = {{fontsize: 15}} placeholder="Search Ticker Here"/>
      </View>
      <SearchFilter data={data} input={input} setInput={setInput}/>
    </View>
  );

};
//This is where clicking on a ticker will take you
const InfoScreen = ({ navigation, route }) => {
  const [stockPrice, setStockPrice] = useState([]);
  // fetch stock price using ticker symbol
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/enterprise-values/${route.params.paramKey.Symbol}?limit=10&apikey=53ae3092e991cc14ca13e3bfed2d3802`
        );
        const newData = await response.json();
        setStockPrice(newData);
      } catch {
        console.log('error fetching data');
      }
    };

    fetchData();
    console.log('here is the stock data');
    console.log(stockPrice);
  }, []);

  if (stockPrice[0]) {
  }
  //Before returning here, we need to update info based on what stock it is
  // return <Text>{route.params.paramKey.Symbol}</Text>;
  let explanation = '';
  if (route.params.paramKey.Rating === 'AAA' || route.params.paramKey.Rating === 'AA') {
    explanation = 'Leader';
  } else if (
    route.params.paramKey.Rating === 'A' ||
    route.params.paramKey.Rating === 'BBB' ||
    route.params.paramKey.Rating === 'BB'
  ) {
    explanation = 'Average';
  } else {
    explanation = 'Laggard';
  }
  if (stockPrice[0]) {
    let stockPriceArr = [];
    for (let i = stockPrice.length - 1; i >= 0; i--) {
      stockPriceArr.push(stockPrice[i].stockPrice);
    }
    const lineChartData = {
      labels: [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
      datasets: [
        {
          data: stockPriceArr,
        },
      ],
    };

    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
          }}
        >
          {route.params.paramKey.Name} ({route.params.paramKey.Symbol})
        </Text>
        <Text
          style={{
            padding: 20,
          }}
        >
          {console.log('here pt 2')}
          {console.log(stockPrice)}
          ESG Rating: {route.params.paramKey.Rating} ({explanation}){'\n'}
          Stock Price: {route.params.paramKey.Price}
        </Text>
        <LineChart
          data={lineChartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            backgroundColor: 'blue',
            backgroundGradientFrom: 'blue',
            backgroundGradientTo: 'green',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const LoginScreen = ({navigation, route}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const auth = getAuth();

  const handleRegister  = () => {
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
    navigation.navigate('Home', { screen: 'How', params: { name: user.email } });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

  return(
    <View>
      <Image
      style={{width: 397, height: 300, bottom:40}}
      source = {require('./assets/StockAnalyzer.png')}
      resizeMode={'contain'}/>
    <Text style={styles.title}> Welcome Back! </Text>
    <Pressable>
      <View style={styles.form}>
        <Text style={styles.label}>Email: </Text>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value = {email}
            onChangeText = {text => setEmail(text)}
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
       value = {password}
       onChangeText = {text => setPassword(text)}
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
  )
}

//***STYLESHEET***//

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
    left : "62%",
    top: "0%",
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
    left : "30%",
    top: "%",
    backgroundColor: '#646464',
    borderRadius: 25
  },
  registerButton : {
    height : 50,
    width : 150,
    left : "30%",
    top: "1%",
    backgroundColor: '#646464',
    borderRadius: 25
  },
  buttonText : {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
    left: "22%",
    top: "30%",
    textAlign : "center",
    textAlignVertical : "center"
  },
  image: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  setFontSizePurpose: {
    fontSize: 25,
    fontFamily: 'Test'
  },
});
