import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key !== 'breed')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>{item.breed}</Text>
      {keys.map(key => <Text>{key} : {item[key]}</Text>)}
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default DetailsScreen