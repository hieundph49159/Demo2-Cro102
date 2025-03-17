import React, { useState, useContext, createContext } from 'react';
import { View, Text, Button } from 'react-native';

const ThemeContext = createContext('light');
const UseContextScreen = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Button title="Toggle Theme" onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Paragraph />
    </ThemeContext.Provider>
  );
};

const Paragraph = () => {
  const theme = useContext(ThemeContext);
  return <Text style={{ backgroundColor: theme === 'light' ? 'white' : 'gray' }}>Theme: {theme}</Text>;
};

export default UseContextScreen;
