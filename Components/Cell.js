import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

function Cell({ title, showDetails }) {
  return (
    <TouchableHighlight
      style={{ padding: 10 }}
      onPress={() => showDetails()}
      underlayColor="tomato"

    >
      <Text
        style={{ fontSize: 18 }}
      >{title}</Text>
    </TouchableHighlight>
  )
}

export default Cell