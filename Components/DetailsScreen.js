import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { id, value, name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen id: {id}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', { id: id + 1 })}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default DetailsScreen