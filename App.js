import React, { Component } from 'react'
import { Image, ImageBackground, Alert, Text, View, TouchableOpacity, StyleSheet, ButtonBasics } from 'react-native'
//import ImageHeader from '../Images';


class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'SCHEDULE',
         },
         {
            id: 1,
            name: 'VIEW GAMES',
         },
         {
            id: 2,
            name: 'FEATURED',
         },
         {
            id: 3,
            name: 'OPEN PLAY',
         },
         {
          id: 4,
          name: 'COMPETE',
         },
         {
        id: 5,
        name: 'LIVE MUSIC',
         },
         {
           id: 6,
           name: 'SEMINARS',
         }
      ]
   }
   
   
   render() {
      return (

        <View style={{flex:1}}> 
            {
              <ImageBackground source={require('./Images/Background.jpg')} style={{flex:1}}>
                
                <View> 
                {

                  this.state.names.map((item, index) => (
                      <TouchableOpacity
                        key = {item.id}
                        style = {styles.container}
                        onPress = {() => alert("There is nothing yet. Come back!")}>
                        
                        <Text style = {styles.text}>
                            {item.name}
                        </Text>
                      </TouchableOpacity>
                  ))
                }
                </View>

              
              
              </ImageBackground>
            }
          </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 2,
      
    
      alignItems: 'flex-start',
   },
   text: {
      color: '#2C3539'
   }
})