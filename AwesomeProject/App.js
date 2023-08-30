import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >= 3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;