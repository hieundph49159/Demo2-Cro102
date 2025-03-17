import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const UseEffectScreen = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(-1);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
    console.log(`Số lần: ${renderCount + 1} lần `);
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
     
    </View>
  );
};

export default UseEffectScreen;
