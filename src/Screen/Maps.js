import React, { useState } from 'react'
import {View,Dimensions,StyleSheet} from 'react-native' 
import MapView, {PROVIDER_GOOGLE, Marker,Callout} from 'react-native-maps';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 1000;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Icon from 'react-native-vector-icons/FontAwesome';
const Maps =()=>{

    const [initialPosition,setInitialPosition]=useState({ 
        latitude: -6.300641,
        longitude: 106.814095,
    })

    const coordinateData = this.props.navigation.state.params.countryData;
    console.log(countryData)
    return (
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={map => (this._map = map)}
            style={styles.map}
            region={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <View>
              {coordinateData.map((marker,index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: Number(marker.lat),
                    longitude: Number(marker.long),
                  }}
                >
                  {/* <Callout>
                  <Text>{marker.countryRegion}</Text>
                <Text>{marker.confirmed}</Text>
                  </Callout> */}
                  {/* taking too long times  */}
                  </Marker>
              ))}
            </View>
          </MapView>
          <View style={{backgroundColor:'white',width:60,alignItems:'center'}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon style={{color: 'green'}} name="arrow-circle-left" size={42} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  
  
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    loadingScreen: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#292826',
    },
  });
 export default Maps