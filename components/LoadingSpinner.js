import React, {Component,useState} from "react";
import {View, ActivityIndicator} from "react-native";

//Progress spinner for all the screens
export default LoadingSpinner= (props) => {
    return (
      <React.Fragment>
        <ActivityIndicator color={'black'} size={'large'} animating={props.isLoading} />
        </React.Fragment>
   
    )

}
