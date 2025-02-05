// import React, {createContext, useState, useEffect} from 'react';
// import {Appearance} from 'react-native';
// import {lightTheme, darkTheme} from '../theme/theme';

// export const ThemeContext = createContext({
//   theme: lightTheme,
//   toggleTheme: () => {},
// });

// export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
//   const colorScheme = Appearance.getColorScheme();
//   const [theme, setTheme] = useState(
//     colorScheme === 'dark' ? darkTheme : lightTheme,
//   );

//   useEffect(() => {
//     const subscription = Appearance.addChangeListener(({colorScheme}) => {
//       setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
//     });

//     return () => subscription.remove();
//   }, []);

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
//   };

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, {createContext, useState, useEffect, useContext} from 'react';
import {Appearance} from 'react-native';
import {lightTheme, darkTheme} from '../theme/theme';

// Initialize theme based on system preference
const colorScheme = Appearance.getColorScheme();
export let theme = colorScheme === 'dark' ? darkTheme : lightTheme;

// Theme Context
export const ThemeContext = createContext<{
  theme: typeof lightTheme;
  toggleTheme: () => void;
}>({
  theme,
  toggleTheme: () => {},
});

// Theme Provider
export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      theme = colorScheme === 'dark' ? darkTheme : lightTheme;
      setCurrentTheme(theme);
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    theme = theme === lightTheme ? darkTheme : lightTheme;
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
