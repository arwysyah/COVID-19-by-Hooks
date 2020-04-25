import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, RefreshControl, ScrollView } from 'react-native';
import { Badge } from 'native-base'
import Card from './Components/Card';
import Axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import BackgroundList from './Components/BackgroundList'
import { NeuBorderView, NeuButton } from 'react-native-neu-element'
import gray from './Components/Color'
import IonIcons from 'react-native-vector-icons/Ionicons'
const newApi = 'https://indonesia-covid-19.mathdro.id/api/';
const Indonesia = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [listData, setListData] = useState([])
    const [text, setText] = useState('')
    const [refreshing, setRefreshing] = useState(false);
    const getData = () => {
        Axios.get(`${newApi}`).then(response => {
            setData(response.data);
        });
    }
    const getListData = () => {
        Axios.get(`${newApi}/provinsi`).then((response) => {
            setListData(response.data.data)
        })
    }

    useEffect(() => {
        getData()
        getListData()
    }, []);
    const onRefresh = () => {
        setRefreshing(true);
        setData([]);
        setListData([])
        getData()
        getListData()
        setRefreshing(false)
    };


    const filterData = listData.filter(data => {
        return data.provinsi.toLowerCase().indexOf(text.toLowerCase()) !== -1
    })
    console.log(listData);

    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 5 }}>
                <NeuButton
                    color={gray}
                    height={40}
                    width={40}
                    borderRadius={20}
                    style={{ paddingVertical: 5 }}
                    concav
                    onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={20} color={'brown'} />
                </NeuButton>
                <NeuBorderView
                    style={{ marginLeft: -55 }}
                    color={gray}
                    height={30}
                    width={200}
                    borderRadius={10}
                    style={{ paddingVertical: 5 }}
                >
                    <Text style={styles.textShadows}>Indonesia</Text>
                </NeuBorderView>

                <NeuButton
                    color={gray}
                    height={40}
                    width={40}
                    borderRadius={20}
                    style={{ paddingVertical: 5 }}
                    concav
                    onPress={() => onRefresh()}>
                    <IonIcons name="ios-refresh" size={20} color={'brown'} />
                </NeuButton>
                <View style={{ height: 10 }} />
            </View>
            {Object.entries(data).length === 0 ? (
                <Text> Data Not Found</Text>
            ) : (
                    <Card
                        confirmed={data.jumlahKasus}
                        recovered={data.sembuh}
                        deaths={data.meninggal}
                    />
                )}


            <View style={{ paddingHorizontal: 15 }}>
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
                        <Text style={{ fontSize: 8, textAlign: 'center', color: 'white' }}>
                            Country
            </Text>
                    </Badge>
                    <Badge style={styles.confirmedBadge}>
                        <Text style={{ fontSize: 8, textAlign: 'center', color: 'white' }}>
                            Confirm
            </Text>
                    </Badge>

                    <Badge style={styles.deathBadge}>
                        <Text style={{ fontSize: 8, textAlign: 'center' }}> death</Text>
                    </Badge>
                    <Badge style={styles.recoveredBadge}>
                        <Text style={{ fontSize: 8, textAlign: 'center' }}>Recovered</Text>
                    </Badge>
                    <Badge style={styles.activeBadge}>
                        <Text style={{ fontSize: 8, textAlign: 'center' }}>Active</Text>
                    </Badge>
                </View>
                {listData.length > 0 ? (
                    <FlatList
                        style={{ marginTop: 10 }}
                        showsVerticalScrollIndicator={true}
                        data={filterData}
                        refreshControl={
                            <RefreshControl
                                //refresh control used for the Pull to Refresh
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                        renderItem={({ item }) => (
                            <BackgroundList
                                countryRegion={item.provinsi}
                                confirmed={item.kasusPosi}
                                deaths={item.kasusMeni}
                                // active={item.kasusSemb}
                                recovered={item.kasusSemb}
                                id={item.fid}
                                navigation={navigation}
                            />
                        )}
                        keyExtractor={item => item.fid.toString()}
                    />
                ) : (
                        <Text style={{ textAlign: 'center' }}>Data Not Found</Text>
                    )}
            </View>

        </ScrollView>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E0E5EC',
        flex: 1,
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
        left: 7
    },
    activeBadge: {
        height: 19,
        top: 5,
        backgroundColor: '#22d3e3',
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: -16,
        left: 14
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
        flexDirection: 'row'
    },
    textShadows: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 3,
        fontWeight: 'bold',
        fontSize: 23,
    },

});
export default Indonesia;
