import React, { Component } from 'react'
import { ScrollView, Dimensions, Image, ImageBackground, Alert, Text, View, TouchableOpacity, StyleSheet, ButtonBasics } from 'react-native'
//import ImageHeader from '../Images';


export default class List extends Component {
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
         },
         {
          id: 7,
          name: 'VENDORS',
        },
        {
          id: 8,
          name: 'SPONSORS',
        }

      ]
   }
   
   
   render() {

    let ScreenHeight = Dimensions.get("window").height;
    let ScreenWidth = Dimensions.get("window").width;

      return (

        <View style={{flex:1}}> 
        
        
          <View style={{flex: 1,}}>

            <Image 
            style={styles.stretch}
            source={require('./Images/MainScreenImage.png')}/>
          </View>

          <View style={{flex: 3}}>


              <ImageBackground source={require('./Images/Background.jpg')} style={{flex:1}}>
                
              <ScrollView> 

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
                </ScrollView> 
              </ImageBackground>
            </View>
            
          </View>
      );
   }
}


  


const styles = StyleSheet.create ({
   container: {
      padding: 25,
      marginTop: 5,
      
    
      alignItems: 'flex-start',
   },
   text: {
      color: '#2C3539'
   },

   stretch: {
    flex: 1,
    width: '100%',
   }
})