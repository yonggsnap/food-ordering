import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

interface ProductListItemProps {
  product: Product;
}

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    overflow: "hidden",
    flex: 1,
    maxWidth: "50%", // Takes care of edge case if the number of products is odd
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
});
