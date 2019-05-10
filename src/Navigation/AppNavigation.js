import React from 'react'
import {Text} from 'react-native'
import {StackNavigator, DrawerNavigator} from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import ItemList from '../screens/ItemList'
import DrawerContainer from '../components/DrawerContainer'


const DrawerStack = DrawerNavigator({
    Home:{screen:Home},
    Login:{screen:Login},
    Signup: {screen:Signup},
    ItemList:{screen:ItemList},
},{
    gesturesEnabled:false,
    contentComponent:DrawerContainer
})

const drawerButton = (navigation)=>
<Text style={{padding :5, color:'white'}} onPress={()=>{
    if(navigation.state.index === 0){
        navigation.navigate('DrawerOpen')
    }else{
        navigation.navigate('DrawerCloser')
    }
}
}>Menu</Text>

const DrawerNavigation = StackNavigator({
    DrawerStack:{screen:DrawerStack}
},{
    headerMode:'float',
    navigationOptions:({navigation})=>({
        headerStyle:{backgroundColor:'#4C3E54'},
        title:'Welcome',
        headerTintColor:'white',
        gesturesEnabled:false,
        headerLeft:drawerButton(navigation)
    })
})

const LoginStack = StackNavigator({
    loginScreen:{screen:Login},
    signupScreen:{screen:Signup}
},{
    headerMode:'float',
    navigationOptions:{
        headerStyle:{backgroundColor:'#E73536'},
        title:'You are not Logged in',
        headerTintColor:'white'
    }
})

const PrimaryNav = StackNavigator({
    LoginStack:{screen:LoginStack},
    DrawerStack:{screen:DrawerNavigation}
},{
    headerMode:'none',
    title:'Main',
    initialRouteName:'loginStack',
    transitionConfig:noTransitionConfig
})

export default PrimaryNav