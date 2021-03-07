import React from "react";
import {
  View,
  StatusBar,
  StyleSheet
} from "react-native";
import Header from "./component/Header/index";
import CarsList from "./component/CarsList/index";
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CarsList  />
    </View>
  );
};
const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default App;
