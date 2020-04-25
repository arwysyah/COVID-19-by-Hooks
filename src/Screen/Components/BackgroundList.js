import React, { useState } from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Button, SafeAreaView} from 'react-native'
import Modal from 'react-native-modal';
import {NeuBorderView,NeuView} from 'react-native-neu-element'
import gray from './Color'

const BackgroundList =({countryRegion,confirmed,deaths,recovered,item})=>{
  // console.log(countyData,'res')
    const [isModalVisible,setModal]=useState(false)
 return (
      <View style={styles.container}>
        <View style={styles.cardParent}>
          <View style={styles.cardItemCountry}>
          <Modal isVisible={isModalVisible} style={{borderRadius:30}}>
          <View style={{height:300,backgroundColor:gray,alignItems:"center"}}>
            
            <NeuView
          color={gray}
          height={30}
          width={200}
          borderRadius={10}
          style={{paddingVertical: 15}}>
          <Text style={styles.textShadows2}>Detail Cases</Text>
        </NeuView>
        <SafeAreaView>
        <View style={{alignItems:"center",}}> 
      
 
 <Text style={{fontSize:20,fontWeight:'bold'}}>{countryRegion}</Text>
 <Text style={{color:'black',fontSize:14,marginVertical:10}}>{confirmed} Cases</Text>
 <Text style={{color:'red',marginVertical:10}}>{deaths} Cases</Text>
 <Text style={{color:'green',marginVertical:10}}>{recovered}Cases</Text>
 <Text style={{color:'blue',marginVertical:10}}>{confirmed-recovered-deaths} Cases</Text>
        </View>
        
  
 
 
        </SafeAreaView>
        <View style={{height:20}}/>
            <Button title="Close" onPress={()=>setModal(!isModalVisible)} />
          </View>
        </Modal>
            <TouchableOpacity
              onPress={() =>
                setModal(!isModalVisible) 
              }
              >
              <Text numberOfLines={2} style={styles.countryText}>{countryRegion}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardItemDateCases}>
            <Text style={styles.confirmedText}>{confirmed}</Text>
          </View>
          <View style={styles.cardItemDateCases}>
            <Text style={styles.deathtext}>{deaths}</Text>
          </View>
          <View style={styles.cardItemDateCases}>
            <Text style={styles.recovered}>{recovered}</Text>
          </View>
          <View style={styles.cardItemDateCases}>
            <Text style={styles.activeText}>{confirmed-recovered-deaths}</Text>
          </View>

        
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardParent: {
    flexDirection: 'row',

    paddingHorizontal: 3,
  },
  cardItemDateCases: {
    // backgroundColor: '#cc8181',
    // flexDirection: 'column',

    width: 70,
    height: 30,
  },
  cardItemCountry: {
    // backgroundColor: '#cc8181',
    flexDirection: 'column',

    width: 70,
    height: 30,
  },
  deathtext: {
    fontSize: 12,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#eb3107',
    top: 6,
  },
  confirmedText: {
    fontSize: 12,
    textAlign: 'justify',
    fontWeight: 'bold',
    top: 6,
  },

  activeText: {
    fontSize: 12,
    textAlign: 'justify',
    color: '#22d3e3',
    fontWeight: 'bold',
    top: 6,
  },
  recovered: {
    fontSize: 12,
    textAlign: 'justify',
    color: 'green',
    fontWeight: 'bold',
    top: 6,
  },
  countryText: {fontSize: 12, textAlign: 'justify', fontWeight: 'bold'},
});
export default BackgroundList