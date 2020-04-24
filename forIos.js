import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import NeumorphismButton from './src/neumorphism-button';
import {AntDesign, Entypo, Ionicons} from 'react-native-vector-icons';

const gray = '#91A1BD';
const App = () => {
  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}
          />
        </View>
      </View>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <SafeAreaView style={{alignSelf: 'stretch'}}>
          <View style={{marginHorizontal: 32, marginTop: 32}}>
            <View style={styles.topContainer}>
              <NeuMorph>
                <AntDesign name="arrowleft" size={20} color={gray} />
              </NeuMorph>

              <View>
                <Text style={styles.playing}>playing</Text>
              </View>
              <NeuMorph>
                <AntDesign name="arrowleft" size={20} color={gray} />
              </NeuMorph>
            </View>
            <View>
            <NeuMorph>
               <Image source={require('./src/Screen/Assets/logo.png')}/>
              </NeuMorph>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '3DEE9FD',
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inner: {
    backgroundColor: 'DEE9F7',
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
    topShadow: {
      shadowOffset: {
        width: -6,
        height: -6,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: '#87C4DD',
    },
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
    borderColor: '#D7EF1F3',
    borderWidth: 15,
  },
});

export default App;
