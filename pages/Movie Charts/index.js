import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity,Dimensions} from 'react-native';
import {BarChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';

export default function MovieChart({route, navigation}) {

const { movie } = route.params;
const changeMovieTitleData=()=>{
    let result=movie.map(x=>x.title);

    console.log(result) ;
    return result
}
const changeMovieRatingsData=()=>{
    let result=movie.map(x=>parseInt(x.imDbRating));

    console.log(result);
    return result

}
  return (
    <View style={styles.mainContainer}>
    <View style={styles.secondaryContainer}>
    <View>
    <BarChart
      style={styles.barChart}
      numberOfTicks={5}

      spacingInner={0.35}
      data={changeMovieRatingsData()}
      svg={{fill: "#C6965A"}}
      contentInset={{top: 30, bottom: 8}}>
      <Grid />
    </BarChart>
    <XAxis
      style={styles.xAxis}
      data={changeMovieRatingsData()}
      formatLabel={(value, index) => changeMovieTitleData()[index]}
      contentInset={{left: 25, right: 35}}
      svg={{fontSize: 6, fill: '#c1c2c2'}}
    />
  </View>
  <YAxis
    style={styles.yAxis}
    data={changeMovieRatingsData()}
    contentInset={{top: 30, bottom: 8}}
    spacingInner={0.35}
    svg={{
      fill: '#c1c2c2',
      fontSize: 12,
    }}
  />
</View>
</View>
  );
  
}

const styles = StyleSheet.create({
    mainContainer: {
      marginBottom: 50,
      height: 250,
      width: 300,
      flexDirection: 'column',
      justifyContent: 'center',
      alignSelf:'center',
      marginRight:15,
      flex:1
  
    },
    secondaryContainer: {
      height: 250,
      width: 320,
      flexDirection: 'row',
    },
    barChart: {height: 250, width: 300},
    xAxis: {marginHorizontal: -10, marginTop: 5},
    yAxis: {marginLeft: 5},
    graph: {
      height: 250,
      width: 320,
      flexDirection: 'row',
    },
    graphLabelContainer: {
      width: Dimensions.get('window').width - 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    graphLabelText: {
      marginTop: Dimensions.get('window').height / 22,
      width: Dimensions.get('window').width - 20,
      textAlign: 'center',
      fontSize: 13,
      color: '#c1c2c2',
      fontFamily: 'Notosans',
    },
  });