import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import CarItem from './component/carItem/index'
import CarsList from './component/CarsList/index'
const App = () => {
  return (
    
    <View >
      
      <StatusBar style='auto' />
      <CarsList/>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
