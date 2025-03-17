import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button } from 'react-native';

const UseRefScreen = () => {
  const prevCount = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <View>
      <Text>Current: {count}, Previous: {prevCount.current}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseRefScreen;
