import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableOpacity} from 'react-native';
import ProgressSpinner from './components/LoadingSpinner';

export default function App() {
  const [search,setSearch]= useState('');
  const [movieList,setMovieList]=useState([])
  const [loading,setLoading]=useState(false);
  const [selectedMovie,setSelectedMovie]=useState(null);

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
      console.log(responseJson)
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
      <Button
      onPress={()=>{searchMovie()}}
      title="Search"
      color="#841584"
      />
      {movieList.map(x=>{
        return(
          // <Text>{x.title}</Text>
          <TouchableOpacity onPress={()=>{selectMovie(x)}}>
            <Text>{x.title}</Text>
          </TouchableOpacity>
        )
      })}
    <Text style={{marginBottom:15,marginTop:25}}>Selected Movie Details:</Text>
      {selectedMovie == null ? null :
      (
        <React.Fragment>
        <Text>{selectedMovie.title}</Text>
        <Text>{selectedMovie.imDbRating}</Text>
        <Text>{selectedMovie.genres}</Text>
        <Text>{selectedMovie.plot}</Text>
        </React.Fragment>
      )
      }
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
});
