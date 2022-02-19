import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

function Cell({ title }) {
  return (
    <TouchableHighlight
      onPress={() => console.log('hi')}
      style={{ padding: 10 }}
    >
      <Text
        style={{ fontSize: 18 }}
      >{title}</Text>
    </TouchableHighlight>
  )
}

export default Cell