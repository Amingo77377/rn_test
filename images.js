import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, Linking} from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";
const style = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    margin: 10,
  }
})
class Images extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render(){
    return(
      <ScrollView style={{marginTop: 50, flex: 1, padding: 10}}>
        <Text>images</Text>
        <Image style={style.img} source={require('./images/4funBase.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('https://4funbase.wixsite.com/realgame')}>
          4funBase
        </Text>
        <Image style={style.img} source={require('./images/A5Studio.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('https://www.facebook.com/A5escape/')}>
          A5
        </Text>
        <Image style={style.img} source={require('./images/AngeLost.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('https://angelost.simplybook.asia/v2/')}>
          AngeLost
        </Text>
        <Image style={style.img} source={require('./images/badideas.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('http://www.badideasstudio.com/')}>
          badideas
        </Text>
        <Image style={style.img} source={require('./images/BearHouse.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('https://www.facebook.com/bearhorse2014/')}>
          BearHouse
        </Text>
        <Image style={style.img} source={require('./images/blackbox.jpg')}/>
        <Text style={{color: 'blue', marginLeft: 10}}
              onPress={() => Linking.openURL('https://www.mindinblackbox.com/')}>
          blackbox
        </Text>
      </ScrollView>
    )
  }
}

export default Images