import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const BackgroundList =({countryRegion,confirmed,deaths,recovered,active})=>{
  // console.log(countyData,'res')
    
 return (
      <View style={styles.container}>
        <View style={styles.cardParent}>
          <View style={styles.cardItemCountry}>
            
            <TouchableOpacity
              onPress={() => {
                // this.navigation();
              }}>
              <Text style={styles.countryText}>{countryRegion}</Text>
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
            <Text style={styles.activeText}>{active}</Text>
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