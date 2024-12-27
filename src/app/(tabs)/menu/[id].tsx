import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: "Item Details for id:" + id }} />
      <Text style={styles.title}>Details for product id: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})