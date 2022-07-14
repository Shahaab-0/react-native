/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import App from '../../Screens/App';
import Prayer from '../../Screens/Prayer';
import Qibla from '../../Screens/Qibla';
import Taqibaat from '../../Screens/Taqibaat';
import Setting from '../../Screens/Setting';
import {IconX, ICON_TYPE} from '../../Icons';
import {createStackNavigator} from '@react-navigation/stack';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('THE WAY TO ALLAH'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle, marginLeft: 80},
          ],
        }}
        name="homestackscreen"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const PrayerStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('THE WAY TO ALLAH'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.header},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle, marginLeft: 80},
          ],
        }}
        name="prayerStackScreen"
        component={Prayer}
      />
    </Stack.Navigator>
  );
};

const QiblaStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('THE WAY TO ALLAH'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle, marginLeft: 80},
            ],
          };
        }}
        name="qiblaStackScreen"
        component={Qibla}
      />
    </Stack.Navigator>
  );
};

const TaqibaatScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('THE WAY TO ALLAH'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle, marginLeft: 80},
            ],
          };
        }}
        name="taqibaatScreen"
        component={Taqibaat}
      />
    </Stack.Navigator>
  );
};

// const SettingScreen = () => {
//   const {t} = useTranslation();
//   const {theme} = useAppTheme();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={(route, navigation) => {
//           return {
//             title: t(''),
//             headerStyle: [
//               NavigationStyles.header_statusBar,
//               {backgroundColor: theme.colors.header},
//             ],
//             headerTitleStyle: [
//               NavigationStyles.headerTitle,
//               {color: theme.colors.headerTitle},
//             ],
//           };
//         }}
//         name="settingScreen"
//         component={Setting}
//       />
//     </Stack.Navigator>
//   );
// };

function getHomeIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.OCTICONS}
      name={'home'}
      color={color}
    />
  );
}

function getPrayerIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.TABLE}
      name={'table'}
      color={color}
    />
  );
}

function getQiviaIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.COMPASS}
      name={'compass'}
      color={color}
    />
  );
}

function getTaqibaatIcon({focused, color}) {
  return (
    <IconX
      // style={{marginBottom: 5}}
      origin={ICON_TYPE.TEXT}
      name={'file-text-o'}
      color={color}
    />
  );
}

// function getSettingIcon({focused, color}) {
//   return (
//     <IconX
//       style={{marginBottom: 5}}
//       origin={ICON_TYPE.SETTING}
//       name={'setting'}
//       color={color}
//     />
//   );
// }
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    origin: ICON_TYPE.OCTICONS,
    name: 'home',
    component: HomeStackScreen,
  },
  {
    route: 'feed',
    origin: ICON_TYPE.TABLE,
    name: 'table',
    label: 'Prayer Table',
    component: PrayerStackScreen,
  },
  {
    route: 'explore',
    label: 'Qibla',
    origin: ICON_TYPE.COMPASS,
    name: 'compass',
    component: QiblaStackScreen,
  },
  {
    route: 'explores',
    label: 'Taqibaat',
    origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: TaqibaatScreen,
  },
];

const Tab = createMaterialBottomTabNavigator();
const NewTab = createBottomTabNavigator();
const animate1 = {
  0: {scale: 0.5, translateY: 0},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 8},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.3},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};
const TabButton = props => {
  const focused = props.accessibilityState.selected;
  const textRef = useRef(null);
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);
  return (
    <TouchableOpacity style={tabStyle.container} onPress={props.onPress}>
      <Animatable.View duration={700} ref={viewRef} style={tabStyle.container}>
        <View style={tabStyle.btn}>
          <Animatable.View
            duration={700}
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#ff6900',
              borderRadius: 25,
            }}
          />

          <IconX
            color={focused ? 'white' : '#ff6900'}
            // style={{marginBottom: 5}}
            size={25}
            origin={props.item.origin}
            name={props.item.name}
          />
        </View>
        <Animatable.Text
          style={{
            fontSize: 10,
            color: '#ff6900',
            textAlign: 'center',
          }}
          ref={textRef}>
          {props.item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTabs = () => {
  const {theme} = useAppTheme();
  return (
    <NewTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          backgroundColor: '#fff',
          borderTopColor: '#fff',
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <NewTab.Screen
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: ({color, focused}) => (
                <IconX
                  // style={{marginBottom: 5}}
                  origin={item.origin}
                  name={item.name}
                />
              ),
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </NewTab.Navigator>
    // <Tab.Navigator
    //   initialRouteName={Routes.HOME_SCREEN}
    //   backBehavior={'initialRoute'}
    //   inactiveColor="#ff6900"
    //   activeColor={theme.colors.black}
    //   shifting={false}
    //   barStyle={{
    //     backgroundColor: theme.colors.bottom,
    //     shadowOffset: {
    //       width: 0,
    //       height: 12,
    //     },
    //     shadowOpacity: 0.58,
    //     shadowRadius: 16.0,
    //     elevation: 24,
    //     borderTopLeftRadius: 30,
    //     borderBottomLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     borderBottomRightRadius: 30,
    //     position: 'absolute',
    //     bottom: 0,
    //     padding: 10,
    //     width: '100%',
    //     zIndex: 0,
    //   }}
    //   // labeled={false}
    // >
    //   <Tab.Screen
    //     options={{
    //       tabBarIcon: getHomeIcon,
    //       title: 'Home',
    //     }}
    //     name={Routes.HOME_SCREEN}
    //     component={HomeStackScreen}
    //   />
    //   <Tab.Screen
    //     options={{
    //       tabBarIcon: getPrayerIcon,
    //       title: 'Prayer Table',
    //     }}
    //     name={Routes.PRAYER_SCREEN}
    //     component={PrayerStackScreen}
    //   />
    //   <Tab.Screen
    //     options={{
    //       tabBarIcon: getQiviaIcon,
    //       title: 'Qibla',
    //     }}
    //     name={Routes.QIBLA_SCREEN}
    //     component={QiblaStackScreen}
    //   />
    //   <Tab.Screen
    //     options={{
    //       tabBarIcon: getTaqibaatIcon,
    //       title: 'Taqibaat',
    //     }}
    //     name={Routes.TAQIBAAT_SCREEN}
    //     component={TaqibaatScreen}
    //   />
    //   {/* <Tab.Screen
    //     options={{
    //       tabBarIcon: getSettingIcon,
    //       title: 'Setting',
    //     }}
    //     name={Routes.SETTING_SCREEN}
    //     component={SettingScreen}
    //   /> */}
    // </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'bottomtabs'} component={BottomTabs} />
    </Stack.Navigator>
  );
};

const tabStyle = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
