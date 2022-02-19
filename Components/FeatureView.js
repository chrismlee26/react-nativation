import React from 'react'
import { View, Text } from 'react-native'

function FeatureView({ name, value }) {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingHorizontal: 10, margin: 5 }}>
      <Text>{name}:</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default FeatureView