import React, { Component } from "react";
import {View, ActivityIndicator,Pressable,StyleSheet,Text} from "react-native";


class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <View styles={styles.container}>
               <Text> Class Component : </Text>
               <Text> {this.state.count}</Text> 
               <Pressable onPress={this.increase}>
                <Text>Add</Text>
               </Pressable>
 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
  });
 
export default ClassComponent;