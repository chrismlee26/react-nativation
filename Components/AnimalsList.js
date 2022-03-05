import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Cell from './Cell'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

function AnimalsList({ navigation, breed }) {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={breed}
        renderItem={({ item, index }) => {
          return (
            <Cell
              title={item.breed}
              showDetails={() => navigation.navigate('Details', { item })}
            />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </SafeAreaView>
  );
}

export default AnimalsList
