import React,{Component} from 'react'
import {StyleSheet, Text,View,Image} from 'react-native'
import {navigationAction, NavigationActions} from 'react-navigation'


export default class DrawerContainer extends Component{
    logout=()=>{
        const actionToDispatch = NavigationActions.reset({
            index:0,
        key:null,
    actions:[NavigationActions.navigate({routeName:'loginStack'})]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }
    render(){
        const {navigation} = this.props
        return(
            <View style={StyleSheet.container}>
                <Text onPress={()=>navigation.navigate('Home')} style={styles.uglyDrawerItem}>Home</Text>
                <Text onPress={()=>navigation.navigate('ItemList')} style={styles.uglyDrawerItem}>ItemList</Text>
                <Text onPress={()=>navigation.navigate('Signup')} style={styles.uglyDrawerItem}>Signup</Text>
                <Text onPress={()=>navigation.navigate('Login')} style={styles.uglyDrawerItem}>Login</Text>
                <Text onPress={this.logout} style={styles.uglyDrawerItem}>log out</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingTop: 40,
      paddingHorizontal: 20
    },
    uglyDrawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#E73536',
      padding: 15,
      margin: 5,
      borderRadius: 2,
      borderColor: '#E73536',
      borderWidth: 1,
      textAlign: 'center'
    }
  })