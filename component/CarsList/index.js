import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import CarItem from "../carItem/index";
import styles from "./style";
import cars from "./cars";


const CarsList = () => {
  const { height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item, _) => item.id.toString()}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        renderItem={({ item }) => {
          return <CarItem key={item.id} car={item} />;
        }}
      />
    </View>
  );
};

export default CarsList;
