import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import { black } from 'ansi-colors';
// import { createStackNavigator, createAppContainer } from "react-navigation";
const css = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    borderColor: '#aaa',
    borderWidth: 1

  }
})
// const data = ['apple', 'app', 'aqua', 'ball', 'bird', 'cat', 'crab', 'pig', 'dog', 'omg', 'ggg']
class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: "",
      res: []
    }
  }
  search = (text) => {
    let a = /^a/
    let b = /^b/
    let c = /^c/
    let d = /^d/
    text = text.toLowerCase()
    if(text.match(a)){
      this.setState({
        res: ['apple', 'app', 'aqua']
      })
    }
    if(text.match(b)){
      this.setState({
        res: ['ball', 'bird']
      })
    }
    if(text.match(c)){
      this.setState({
        res: ['cat', 'crab']
      })
    }
    if(text.match(d)){
      this.setState({
        res: ['dog', 'ddd']
      })
    }
    this.setState({
      text
    }) 
    console.log(this.state.res)
  }
  makeRes = () => {
    return(
      this.state.res.map( (txt, n) => 
        <Text key={n}>{txt}</Text>
      )
    )
  }
  render(){
    return(
      <ScrollView style={{marginTop: 50, flex: 1, padding: 10}}>
        <Text>Search</Text>
        <TextInput style={css.input} placeholder="Search" 
        onChangeText={this.search}
        value={this.state.text}/>
        <View>
          {this.makeRes()}
        </View>
      </ScrollView>
    )
  }
}

export default Search