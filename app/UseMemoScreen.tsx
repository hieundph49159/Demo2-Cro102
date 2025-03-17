import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseMemoScreen = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const total = useMemo(() => count1 + count2, [count1, count2]);

  return (
    <View style={styles.container}>
      <Text>Count 1: {count1}</Text>
      <Button title="Increase by 1" onPress={() => setCount1(count1 + 1)} />
      <Text>Count 2: {count2}</Text>
      <Button title="Increase by 2" onPress={() => setCount2(count2 + 2)} />
      <Text>Total: {total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default UseMemoScreen;