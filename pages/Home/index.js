import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity, Pressable} from 'react-native';
import ProgressSpinner from '../../components/LoadingSpinner';
import { MovieContext } from '../../context/MovieContext';

export default function Home({navigation}) {
  const [search,setSearch]= useState('');
  const [movieList,setMovieList]=useState([])
  const [loading,setLoading]=useState(false);
  const [selectedMovie,setSelectedMovie]=useState(null);

  const {movieRatings,setMovieRatings} = useContext(MovieContext)

  searchBarUpdate=(text)=>{
    setSearch(text)
    console.log(search)
  }

  searchMovie=()=>{
    setLoading(true);
    let requesturl = `https://imdb-api.com/en/API/SearchMovie/k_qi7ff04a/` + search;
    fetch(requesturl, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJson => {
      setMovieList(responseJson.results)
      console.log(responseJson.results);
      setLoading(false);
    })
    .catch(error => {
      setLoading(false);
      return error;
    
    });
  }


  selectMovie=(movie)=>{
    let requesturl = `https://imdb-api.com/en/API/Title/k_qi7ff04a/` + movie.id;
    fetch(requesturl, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(responseJson => {
      setSelectedMovie(responseJson)
      navigation.navigate('MovieDetails',{movie:responseJson})
    })
    .catch(error => {
      setLoading(false);
      return error;
    
    });
  }



  return (
    <View style={styles.container}>
      <TextInput
      onChangeText={(e)=>searchBarUpdate(e)}
      value={search}
      style={styles.input}
      />
      {/* <Button
      onPress={()=>{searchMovie()}}
      title="Search"
      color="#841584"
      style={{marginBottom:25}}
      /> */}
      <Pressable onPress={()=>{searchMovie()}} style={styles.button}>
      <Text style={styles.text}>Search</Text>
      </Pressable>

      <Pressable onPress={()=>{navigation.navigate('MovieChart',{movie:movieRatings})}} style={styles.button}>
      <Text style={styles.text}>Check Movie Chart</Text>
      </Pressable>
      {movieList.map(x=>{
        return(
          <TouchableOpacity onPress={()=>{selectMovie(x)}}>
            <Text>{x.title}</Text>
          </TouchableOpacity>
        )
      })}
      <StatusBar style="auto" />
      <ProgressSpinner isLoading={loading}/>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'70%',
    marginBottom:25,
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
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});
