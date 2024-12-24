import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

export default function ProductListItem ({ product }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }}></Image>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "black"
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  }
});