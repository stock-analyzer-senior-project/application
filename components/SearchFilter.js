import { StyleSheet, Text, View, FlatList } from "react-native"
import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react"

const Filter = ({data, input, setInput}) => {
    const navigation = useNavigation();
    return(
        //Need to make each option a button
        <View style={{marginTop:10}}>
            <FlatList data={data} renderItem={({item}) => {
                if(input === ""){
                    //meaning there is nothing being shown, so we need to show something
                    return(
                        <View style={{marginVertical:10}}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>{item.Name}</Text>
                            {/* <Button
                                    title = {item.Symbol}
                                    onPress={() => navigation.navigate("Stock Information", { name: "Slide 1" })}
                            /> */}
                            <Text style={{borderColor:"gray",borderWidth:1,height:1,marginTop:5}}/>
                        </View>
                    )
                }
                if(item.Name.toLowerCase().includes(input.toLowerCase())){
                    return(
                        <View style={{marginVertical:10}}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>{item.Name}</Text>
                            <Button
                                    title = {item.Symbol}
                                    onPress={() => navigation.navigate("Stock Information", { name: "Slide 1", paramKey: item.Name})}
                            />
                            <Text style={{borderColor:"gray",borderWidth:1,height:1,marginTop:5}}/>
                        </View>
                    )
                }
            }}/>
        </View>
    )
}

export default Filter;
const styles = StyleSheet.create({})