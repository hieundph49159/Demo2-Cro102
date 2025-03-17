import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const UseCallbackScreen = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={increment} />
    </View>
  );
};

export default UseCallbackScreen;
