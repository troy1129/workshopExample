
import React, { useState } from "react";
import {View, ActivityIndicator,Pressable,StyleSheet,Text} from "react-native";

 
export default function FunctionalComponent(){
    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }
 
    return (
        <View style={styles.container}>
            <Text>Functional Component : </Text>
            <Text>{count}</Text>
            <Pressable onPress={increase}><Text>Add</Text></Pressable>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      marginTop:100,
    },
  });
  
 