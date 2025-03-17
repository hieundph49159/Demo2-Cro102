import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseStateScreen = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{count}</Text>
      <Button title="Tăng" onPress={handleIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  textCount: { fontSize: 24, marginBottom: 10 },
});

export default UseStateScreen;
