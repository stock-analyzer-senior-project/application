import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"

const Filter = ({data, input, setInput}) => {
    return(
        //Need to make each option a button
        
        <View style={{marginTop:10}}>
            <FlatList data={data} renderItem={({item}) => {
                if(input === ""){
                    //meaning there is nothing being shown, so we need to show something
                    return(
                        <View style={{marginVertical:10}}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>{item.Name}</Text>
                            <Text style={{borderColor:"gray",borderWidth:1,height:1,marginTop:5}}/>
                        </View>
                    )
                }
                if(item.Name.toLowerCase().includes(input.toLowerCase())){
                    return(
                        <View style={{marginVertical:10}}>
                            <Text style={{fontSize:14,fontWeight:"bold"}}>{item.Name}</Text>
                            for(let i = 0; item.size; i++){
                                <Button
                                    title = {item.Name}
                                    onPress={() => navigation.navigate("Stock Information", { name: "Slide 1" })}
                                />
                            }
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