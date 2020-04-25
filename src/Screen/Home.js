import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text,ActivityIndicator} from 'react-native';
import Card from '../Screen/Components/Card';
import countryApi from '../Screen//Components/Api/countryApi';
import { NeuView, NeuButton } from 'react-native-neu-element';
import gray from '../Screen/Components/Color';
import axios from 'axios';
import PieCharts from '../Screen/Components/PieChart';



const Home = ({navigation}) => {
  const [globalCases, setglobalCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    try {
      axios.get(`${countryApi}`).then(response => {
        const globalData = {
          confirmed: response.data.confirmed.value,
          deaths: response.data.deaths.value,
          recovered: response.data.recovered.value,
          last_updated: response.data.lastUpdate,
        };
       
        setglobalCases(globalData);
        setLoading(false)

      });
    } catch (error) {
      console.log(error);
    }
  
   
  },[]);
  console.log(globalCases)
  return (

    <>
  
      <View style={styles.container}>
      {!loading ?
        <SafeAreaView style={{ alignSelf: 'stretch' }}>
          <View style={{ height: 15, alignItems: "center", top: 5 }}>
            <NeuView
              color={gray}
              height={30}
              width={320}
              borderRadius={10}
              style={{ paddingVertical: 5 }}
              concave>

              <Text style={styles.textShadows}>Corona Statistic Case</Text>
            </NeuView>
          </View>
          <View style={{ height: 30 }}></View>
          {Object.entries(globalCases).length === 0 ? (
            <Text style={{ textAlign: 'center' }}> Data Not Found</Text>
          ) : (
              <Card
                deaths={globalCases.deaths}
                confirmed={globalCases.confirmed}
                recovered={globalCases.recovered}
              />
            )}
          <View style={{ alignItems: 'center', top: 10 }}>
            {Object.entries(globalCases).length === 0 ? (
              <Text style={{ textAlign: 'center' }}> ...</Text>
            ) : (
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                  <NeuView
                    color={gray}
                    height={120}
                    width={120}
                    borderRadius={55}
                    style={{ alignItems: "center" }}
                    inset>
                    <PieCharts
                      deaths={globalCases.deaths}
                      confirmed={globalCases.confirmed}
                      recovered={globalCases.recovered}
                    />
                  </NeuView>
                  <View style={{ marginLeft: 20, top: 30 }}>
                    <Text style={{ color: "#C70039", fontWeight: "bold" }}>Death</Text>
                    <Text style={{ color: "#44CD40", fontWeight: "bold" }}>Recovered</Text>
                    <Text style={{ color: "#404FCD", fontWeight: "bold" }}>Active</Text>
                  </View>
                </View>
              )}
            <View style={{ height: 20 }}></View>

            <NeuButton
              color={gray}
              height={40}
              width={160}
              borderRadius={14}
              concave
              onPress={() => navigation.navigate('CountryList')}>

              <Text>Country List</Text>

            </NeuButton>

            <NeuButton
              style={{ top: 20 }}
              color={gray}
              height={40}
              width={160}
              borderRadius={14}
              concave
              onPress={() => navigation.navigate('Indonesia')}>

              <Text>Indonesia</Text>
            </NeuButton>
          </View>
        </SafeAreaView>
        :  
        <View style={styles.container}>
          <ActivityIndicator size="large"  />
        </View> 
         }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E5EC',
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1,
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
  },
  playing: {
    color: gray,
    fontWeight: '800',
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: 'center',
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 15,
  },
  textShadows: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default Home;
