import React from 'react';
import {StyleSheet, View, Text, Linking} from 'react-native';
import {NeuButton, NeuView} from 'react-native-neu-element';
import callData from './Components/Api/callData';
import gray from './/Components/Color';
import textColor from './Components/TextColor';
const CallCenter = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <NeuView
          color={gray}
          height={30}
          width={200}
          borderRadius={10}
          style={{paddingVertical: 5}}>
          <Text style={styles.textShadows2}>Call Center</Text>
        </NeuView>
        <View style={{height: 8}} />

        <NeuView
          color={gray}
          height={220}
          width={320}
          borderRadius={10}
          style={{paddingVertical: 5, alignItems: 'center'}}>
        
          <Text>Jika anda memiliki riwayat perjalanan berasal dari </Text>
          <Text> lokasi yang menjadi penyebaran virus corona 19 </Text>
          <Text>atau anda memiliki gejala gejala yang mirip seperti</Text>
          <Text>gejala dari penyakit yang ditimbulkan oleh corona </Text>
          <Text>Silahkan hubungi nomor yang tertera dibawah ini </Text>
          <Text>Tolong hubungi hanya jika anda memiliki keadaan </Text>
          <Text>seperti diatas, dan jangan melakukan panggilan </Text>
          <Text>jika anda tidak memiliki keadaan seperti diatas.  </Text>
          <Text>mari sama sama menjadi pelindung bagi orang lain</Text>
          <Text>tidak mengganggu atau pun menambah pekerjaan </Text>
          <Text>orang-orang yang rela bekerja di garis terdepan </Text>
          <Text>stay safe everyone,I love you, and we hope be better for future and doing 
              everything that we did before
          </Text>
        </NeuView>
      </View>
      <View style={{alignItems: 'center'}}>
        {callData.map((don, index) => (
          <NeuButton
            key={index}
            style={{marginTop: 12}}
            color={gray}
            height={40}
            width={190}
            borderRadius={14}
            onPress={() => Linking.openURL(`tel:${don.hot_line}`)}>
            <Text style={styles.textShadows}>{don.provider}</Text>
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
export default CallCenter;
