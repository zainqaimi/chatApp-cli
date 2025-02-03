import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Community from '../screens/Community';
import VectorIcon from '../utils/VectorIcon';
import {TopBatData} from '../data/TopBarData';
import {ThemeContext} from '../context/ThemeContext';

const Tab = createMaterialTopTabNavigator();

export default function TopTabBar() {
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: theme.tertiary,
        tabBarInactiveTintColor: theme.secondary,
        tabBarIndicatorStyle: {
          backgroundColor: theme.tertiary,
        },
        tabBarStyle: {
          backgroundColor: theme.background,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return (
              <VectorIcon
                type="FontAwesome5"
                name="users"
                size={20}
                color={theme.secondary}
              />
            );
          },
        }}
      />
      {TopBatData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
