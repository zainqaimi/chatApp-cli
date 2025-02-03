import React, {createContext, useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import {lightTheme, darkTheme} from '../theme/theme';

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
