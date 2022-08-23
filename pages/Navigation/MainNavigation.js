import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import MovieDetail from '../Movie Details'
import MovieChart from '../Movie Charts'

const MainStack = createNativeStackNavigator();

const MainNavigation=()=>{
    return(
    <NavigationContainer>
        <MainStack.Navigator
        initialRouteName="Home">
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="MovieDetails" component={MovieDetail} />
            <MainStack.Screen name="MovieChart" component={MovieChart}/>
        </MainStack.Navigator>
    </NavigationContainer>
    )

}

export default MainNavigation