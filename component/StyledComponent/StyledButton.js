import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = ({type,content,onPress}) => {
  

  const backgroundColor = type === "primary" ? "black" : "white";
  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor}]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text,{color:textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
