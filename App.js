import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import CarItem from './component/carItem/index'
const App = () => {
  return (
    
    <View style={styles.container}>
      <StatusBar style='auto' />
      <CarItem />
      
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
