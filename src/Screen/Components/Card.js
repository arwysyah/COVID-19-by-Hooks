import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {NeuView} from 'react-native-neu-element';
import gray from './Color';
import formatNumber from './formatNumber'
import textColor from './TextColor'
const Card = ({deaths, confirmed, recovered}) => {

    const persentase=(data)=>{
      return(data/confirmed *100)
    }
    let activeCase=confirmed-recovered-deaths
  return (
    <View>
      <View style={styles.topContainer}>
        <NeuView
          color={gray}
          height={120}
          width={130}
          borderRadius={16}
          concave>
            <Text style={styles.textShadows}>CONFIRMED</Text>
          <Text style={styles.textShadows}>{formatNumber(confirmed)}</Text>
        
        </NeuView>

        <NeuView
          color={gray}
          height={120}
          width={130}
          borderRadius={16}
          concave>
            <Text style={styles.textShadows}>DEATH</Text>
          <Text style={styles.textShadows}>{deaths}</Text>
          <Text style={styles.textShadows}>{persentase(deaths).toFixed(2)} %</Text>
        </NeuView>
      </View>
      <View style={{height:20}}></View>
      <View style={styles.topContainer}>
        <NeuView
          color={gray}
          height={120}
          width={130}
          borderRadius={16}
          concave>
            <Text style={styles.textShadows}> RECOVERED</Text>
  <Text style={styles.textShadows}>{formatNumber(recovered)}</Text>
          <Text style={styles.textShadows}>{persentase(recovered).toFixed(2)} %</Text>
        </NeuView>

        <NeuView
          color={gray}
          height={120}
          width={130}
          borderRadius={16}
          concave>
            <Text style={styles.textShadows}> ACTIVE </Text>
          <Text style={styles.textShadows}>{formatNumber(activeCase)}</Text>
          <Text style={styles.textShadows} >{persentase(activeCase).toFixed(2)} %</Text>
        </NeuView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text:{
    color:textColor,
    fontWeight:'bold'
  },textShadows: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',
    color:textColor,
    fontSize:16
  },
});
export default Card;
