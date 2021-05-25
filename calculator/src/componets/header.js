
import React, {Component} from 'react';
import {StyleSheet, Text } from 'react-native';

export default class Header extends Component {

render () {
  const { header,headerText } = styles;

return (
  <View style={header}>
      <Text style={headerText}>{this.props.headerText}</Text>

  </View>

  )
 }
}

const styles = StyleSheet.create({

                header:{


                  height: 80,
                  paddingTop:30,
                  shadowColor:'#000000',
                  shadowOffset:{width:0, height:2},
                  shadowOpacity:0.2,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems:'center',
                  backgroundColor:'#F5FCFF'
                },
                headerText:{
                  fontSize:20,
                  textAlign:'center'
                }



})
