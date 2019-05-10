import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {Provider} from 'react-redux'
import createStore from './Redux'
import ReduxNavigation from './src/Navigation/ReduxNavigation'

// import {
//   DrawerNavigator,
//   StackNavigator,
//   createNavigator
// } from "react-navigation";
// import {
//   createDrawerNavigator,
//   createStackNavigator,
//   createAppContainer
// } from "react-navigation";
// import Home from "./src/screens/Home";
// import Login from "./src/screens/Login";
// import Signup from "./src/screens/Signup";
// import ItemList from "./src/screens/ItemList";

const store = createStore()
export default class app extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <ReduxNavigation></ReduxNavigation>
        </View>
      </Provider>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
})

// const homeStack = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => ({
//       title: "Home",
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: "#FF9800"
//       },
//       headerTintColor: "#fff"
//     })
//   }
// });

// const loginStack = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: ({ navigation }) => ({
//       title: "demo screen 2",
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: "#FF9800"
//       },
//       headerTintColor: "#fff"
//     })
//   }
// });

// const signupStack = createStackNavigator({
//   Signup: {
//     screen: Signup,
//     navigationOptions: ({ navigation }) => ({
//       title: "Demo csreen3",
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: "#FF9800"
//       },
//       headerTintColor: "#fff"
//     })
//   }
// });

// const itemListStack = createStackNavigator({
//   ItemList: {
//     screen: ItemList,
//     navigationOptions: ({ navigation }) => ({
//       title: "Demo screen4",
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: "#FF9800"
//       },
//       headerTintColor: "#fff"
//     })
//   }
// });

// const DrawerNavigatorExample = createDrawerNavigator({
//   Home: {
//     screen: homeStack,
//     navigationOptions: {
//       drawerLabel: "Home"
//     }
//   },
//   Login: {
//     screen: loginStack,
//     navigationOptions: {
//       drawerLabel: "Demo Screen 2"
//     }
//   },
//   Signup: {
//     screen: signupStack,
//     navigationOptions: {
//       drawerLabel: "Demo screen 3"
//     }
//   },
//   ItemList: {
//     screen: itemListStack,
//     navigationOptions: {
//       drawerLabel: "Demo Screen 4"
//     }
//   }
// });

// export default createAppContainer(DrawerNavigatorExample)