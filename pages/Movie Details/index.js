import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { MovieContext } from '../../context/MovieContext';


export default function MovieDetail({route, navigation}) {
  const { movie } = route.params;
  const {movieRatings,setMovieRatings} = useContext(MovieContext)

  const addToMovieRatings=()=>{
    const movieId=x=>x.id==movie.id
    if(movieRatings.some(movieId)==false){
      setMovieRatings(x=>[...x,movie])
    }
  }

  return (
    <View style={styles.container}>
    <Text style={{marginBottom:15}}>Selected Movie Details:</Text>
      {movie == null ? null :
      (
        <View style={{width:'70%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginBottom:5}}>{movie?.title}</Text>
        <Text style={{marginBottom:5}}>{movie?.imDbRating}</Text>
        <Text style={{marginBottom:5}}>{movie?.genres}</Text>
        <Text style={{marginBottom:5}}>{movie?.plot}</Text>
        </View>
      )
      }
      <Pressable style={styles.button} onPress={()=>{addToMovieRatings()}}>
      <Text style={styles.text}>Add to List</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginBottom:25,
    marginTop:15
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
