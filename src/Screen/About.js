import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NeuView, NeuBorderView} from 'react-native-neu-element';
import gray from './Components/Color';
import  FontAwesome from 'react-native-vector-icons/FontAwesome5'
const About = () => {
  return (
    <View style={styles.container}>
      <NeuBorderView
        style={{marginLeft: -55}}
        color={gray}
        height={30}
        width={200}
        borderRadius={10}
        style={{paddingVertical: 5}}>
        <Text style={styles.textShadows}>About</Text>
      </NeuBorderView>
      <View style={{height:30}}/>
      <View style={{alignItems: 'center', paddingHorizontal: 20}}>
        <Text>
          Aplikasi ini dibangun dengan kesediaan diri saya sebagai developer
          untuk membantu memberikan informasi tentang pembaruan data terbaru,
          tentu perbaruan data tidak cepat seperti yang ada di website
          didunia,dikarenakan data(API) yang saya gunakan adalah gratis.
          Aplikasi ini tidak memiliki form login dan register dikarenakan devs
          tidak ingin mengumpulkan data dari pengguna . Aplikasi ini sangat
          memiliki banyak kekurangan mengingat developer yang masih berlevel
          pemula,tetapi ini lah yang dapat developer bangun. Insya Allah
          aplikasi ini akan terus diperbarui sampai masa COVID 19 berakhir
          sejalan dengan developer yang akan terus belajar Special thanks kepada
          mathcovid yang meyediakan data (API) dan memperbarui data secara
          berkala, dan juga kepada teman saya arya yang membuat desain logo dari
          aplikasi ini. Terima kasih semua, semoga kita tetap dilindungi Allah
          SWT dan tetap sehat Stay healthy it will keep others
        </Text>
      </View>
      <View style={{height:40}}/>
      <NeuBorderView
        style={{marginLeft: -55}}
        color={gray}
        height={35}
        width={180}
        borderRadius={10}
        flexDi

 >
   <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
    <FontAwesome name="instagram" size={20} color={'brown'}  style={{left:-22}}/>
          
        <Text>kenzo.ymc</Text>
        </View>
      </NeuBorderView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    backgroundColor: gray,
  },
  textShadows: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
    fontWeight: 'bold',
    fontSize: 23,
},
});

export default About;
