import React from "react";
import { Text, View, ImageBackground, Button } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledComponent/StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $70.000</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          content={"Custom Order"}
          type="primary"
          onPress={() => console.warn("custom order")}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Inventory")}
        />
      </View>
    </View>
  );
};

export default CarItem;
