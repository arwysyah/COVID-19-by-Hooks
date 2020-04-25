import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import {Badge} from 'native-base';
import BackgroundList from './Components/BackgroundList';
import axios from 'axios';
import Api from './Components/Api/countryApi';
import gray from './Components/Color';
import {NeuView, NeuButton,NeuBorderView} from 'react-native-neu-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
const screenHeight =
  Dimensions.get('window').height -
  (Dimensions.get('window').height * 22) / 100;

const CountryList = ({navigation}) => {
  const [countryData, setCountryData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(`${Api}/confirmed`).then(res => {
      setCountryData(res.data);
    });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setCountryData([]);

    axios.get(`${Api}/confirmed`).then(res => {
      setCountryData(res.data);
      setRefreshing(false);
    });
  };

 

  const filterData = countryData.filter(data => {
    return data.countryRegion.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',

          top: 5,
        }}>
        <NeuButton
          color={gray}
          height={40}
          width={40}
          borderRadius={20}
          style={{paddingVertical: 5}}
          concav
          onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={20} color={'brown'} />
        </NeuButton>
        <NeuBorderView
          style={{marginLeft: -55}}
          color={gray}
          height={30}
          width={200}
          borderRadius={10}
          style={{paddingVertical: 5}}>
          <Text style={styles.textShadows}>Country List</Text>
        </NeuBorderView>
        <NeuButton
          color={gray}
          height={40}
          width={40}
          borderRadius={20}
          style={{paddingVertical: 5}}
          concav
          onPress={() => onRefresh()}>
          <IonIcons name="ios-refresh" size={20} color={'brown'} />
        </NeuButton>
        <Text />
      </View>

      <View style={{paddingHorizontal: 15}}>
        <View style={styles.textInput}>
          <AntDesign name="search1" size={20} />
          <TextInput
            style={styles.textInputContainer}
            onChangeText={setText}
            value={text}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            left: -10,
          }}>
          <Badge style={styles.countryBadge}>
            <Text style={{fontSize: 8, textAlign: 'center', color: 'white'}}>
              Country
            </Text>
          </Badge>
          <Badge style={styles.confirmedBadge}>
            <Text style={{fontSize: 8, textAlign: 'center', color: 'white'}}>
              Confirm
            </Text>
          </Badge>

          <Badge style={styles.deathBadge}>
            <Text style={{fontSize: 8, textAlign: 'center'}}> death</Text>
          </Badge>
          <Badge style={styles.recoveredBadge}>
            <Text style={{fontSize: 8, textAlign: 'center'}}>Recovered</Text>
          </Badge>
          <Badge style={styles.activeBadge}>
            <Text style={{fontSize: 8, textAlign: 'center'}}>Active</Text>
          </Badge>
        </View>
        {countryData.length > 0 ? (
          <FlatList
            style={{marginTop: 10}}
            showsVerticalScrollIndicator={true}
            data={filterData}
            refreshControl={
              <RefreshControl
                //refresh control used for the Pull to Refresh
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            renderItem={({item}) => (
              <BackgroundList
                countryRegion={item.countryRegion}
                confirmed={item.confirmed}
                deaths={item.deaths}
                active={item.active}
                recovered={item.recovered}
                id={item.uid}
                item={item}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.uid.toString()}
          />
        ) : (
          <Text style={{textAlign: 'center'}}>Data Not Found</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  secondContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  CardItem: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  countryTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FA4B41',
    fontWeight: 'bold',
  },
  deathBadge: {
    height: 19,
    top: 5,

    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
  },
  recoveredBadge: {
    height: 19,
    top: 5,
    backgroundColor: '#7af549',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: 7,
  },
  activeBadge: {
    height: 19,
    top: 5,
    backgroundColor: '#22d3e3',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: -16,
    left: 14,
  },
  confirmedBadge: {
    height: 19,
    top: 5,
    backgroundColor: 'black',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: -15,
  },
  countryBadge: {
    height: 19,
    top: 5,
    backgroundColor: 'black',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },

  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    marginTop: 18,
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: 'red',
    fontSize: 16,
    flexDirection: 'row',
  },
  textShadows: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',
    fontSize: 23,
  },
});

export default CountryList;
