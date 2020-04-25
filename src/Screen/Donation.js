import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';
import {NeuButton, NeuView,NeuBorderView} from 'react-native-neu-element';
import donate from './Components/Api/dataDonate';
import gray from './/Components/Color';
import textColor from './Components/TextColor';

const Donation = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <NeuBorderView
          color={gray}
          height={30}
          width={200}
          borderRadius={10}
          style={{paddingVertical: 5}}>
          <Text style={styles.textShadows2}>DONATION</Text>
        </NeuBorderView>
        <View style={{height: 8}} />

        <NeuView
          color={gray}
          height={200}
          width={320}
          borderRadius={10}
          style={{paddingVertical: 5, alignItems: 'center'}}>
        
          <Text>Di masa yang sulit ini, mari saling membantu , </Text>
          <Text> saling mengulurkan tangan untuk kemenangan </Text>
          <Text>melewati ujian dari wabah Covid 19 ini bersama</Text>
          <Text>Tentu saja ini sulit, tetapi tidak hanya dirimu dan </Text>
          <Text>saya, tetapi kita semua ada di posisi yang sama </Text>
          <Text>maka, mari bersama saling memberi semangat </Text>
          <Text>untuk melewati masa pandemic ini dengan baik </Text>
          <Text>saya telah menyertakan alamat dari pengumpul </Text>
          <Text>donasi yang berada di indonesia dan terverifikasi</Text>
          <Text>tekan tombol dibawah dan anda akan di alihkan </Text>
          <Text>ke website tersebut sehingga anda dapat melihat </Text>
          <Text>langsung informasi terkait dengan donasi tersebut </Text>
        </NeuView>
      </View>
      <View style={{alignItems: 'center'}}>
        {donate.map((don, index) => (
          <NeuButton
            key={index}
            style={{marginTop: 12}}
            color={gray}
            height={40}
            width={190}
            borderRadius={14}
            onPress={() => Linking.openURL(don.url_Link)}>
            <Text style={styles.textShadows}>{don.companyName}</Text>
          </NeuButton>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
  },
  textShadows: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',
    color: textColor,
    fontSize: 16,
  },
  textShadows2: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',

    fontSize: 19,
  },
});
export default Donation;
