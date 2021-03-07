import React from "react";
import { Text, View, ImageBackground, Button } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledComponent/StyledButton";

const CarItem = ({car}) => {
  const {name,tagline,image,taglineCTA} = car
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline} {' '} {taglineCTA}</Text>
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
