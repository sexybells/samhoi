import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Modal, TextInput, RadioButton } from 'react-native-paper';

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalScore, setModalScore] = useState(false);
    const [checked, setChecked] = useState(4)
    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});
    const [player3, setPlayer3] = useState({});
    const [player4, setPlayer4] = useState({});
    const [player5, setPlayer5] = useState({});
    const [players, setPlayers] = useState([])
    const [score, setScore] = useState([]);
    const [formScore, setFormScore] = useState({player1: '', player2: '', player3: '', player4: '', player5: ''});
    const handlePlayers = (e, key) => {
        switch (key) {
            case 1:
                setPlayer1({ name: e })
                break;
            case 2:
                setPlayer2({ name: e })
                break;
            case 3:
                setPlayer3({ name: e })
                break;
            case 4:
                setPlayer4({ name: e })
                break;
            case 5:
                setPlayer5({ name: e })
                break;
            default:
                break;
        }
    }
    const handleChecked = (value) => {
        setChecked(value);
    }

    const handleScore = (e, key) => {
        setFormScore({ ...formScore, [key]: e });
    }

    const addScore = () => {
        let key = Object.keys(formScore)
        if (checked === 4) {
            key = key.filter((v) => v!== 'player5');
            const log = Object.keys(formScore).filter(key => formScore[key] === '')
            console.log(log);
        }
    }

    const views = [];
    for (let i = 0; i < 100; i++) {
        views.push(
            <View key={i}>
                <Text>23</Text>
            </View>
        );
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <View>
                    {!player1.name && !player2.name && !player3.name && !player4.name && (
                        <View>
                            <TouchableOpacity onPress={() => setOpenModal(true)} style={{ padding: 20 }}>
                                <Text>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            {player1.name && (<Text>{player1.name}</Text>)}
                        </View>
                        <View>
                            {player2.name && (<Text>{player2.name}</Text>)}
                        </View>
                        <View>
                            {player3.name && (<Text>{player3.name}</Text>)}
                        </View>
                        <View>
                            {player4.name && (<Text>{player4.name}</Text>)}
                        </View>
                        <View>
                            {player5.name && (<Text>{player5.name}</Text>)}
                        </View>
                    </View>
                </View>
                <ScrollView
                    style={{ marginTop: 20 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        {player1.name && (
                            <View style={{ flexDirection: 'column' }}>
                                {/* <View>
                                    <Text>23</Text>
                                </View> */}
                                {views}
                            </View>
                        )}
                        <View>
                            {player2.name && (<Text>{player2.name}</Text>)}
                        </View>
                        <View>
                            {player3.name && (<Text>{player3.name}</Text>)}
                        </View>
                        <View>
                            {player4.name && (<Text>{player4.name}</Text>)}
                        </View>
                        <View>
                            {player5.name && (<Text>{player5.name}</Text>)}
                        </View>
                    </View>
                </ScrollView>
                {player1.name && player2.name && player3.name && player4.name && (
                    <View style={{ position: 'absolute', margin: 20, zIndex: 9999, bottom: 0, right: 0 }}>
                        <TouchableOpacity onPress={() => setModalScore(true)} style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </View>
            <Modal
                visible={openModal}
                contentContainerStyle={{
                    backgroundColor: 'grey',
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                }}
            >
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>
                            Số người
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton value={4} onPress={() => handleChecked(4)} status={checked === 4 ? 'checked' : 'unchecked'} />
                            <Text>4</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton value={5} onPress={() => handleChecked(5)} status={checked === 5 ? 'checked' : 'unchecked'} />
                            <Text>5</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            placeholder='Tên người chơi 1'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => handlePlayers(text, 1)}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder='Tên người chơi 2'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => handlePlayers(text, 2)}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder='Tên người chơi 3'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => handlePlayers(text, 3)}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder='Tên người chơi 4'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => handlePlayers(text, 4)}
                        />
                    </View>
                    {checked === 5 && (
                        <View>
                            <TextInput
                                placeholder='Tên người chơi 5'
                                placeholderTextColor={'grey'}
                                onChangeText={(text) => handlePlayers(text, 5)}
                            />
                        </View>
                    )}
                    <TouchableOpacity onPress={() => setOpenModal(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                visible={modalScore}
                contentContainerStyle={{
                    backgroundColor: 'grey',
                    padding: 20,
                    margin: 20,
                    borderRadius: 10,
                }}
            >
                <View>
                    {player1.name && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>{player1.name}</Text>
                            <TextInput onChangeText={(text) => handleScore(text, 'player1')} style={{ width: 50 }} />
                        </View>
                    )}
                    {player2.name && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>{player2.name}</Text>
                            <TextInput onChangeText={(text) => handleScore(text, 'player2')} style={{ width: 50 }} />
                        </View>
                    )}
                    {player3.name && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>{player3.name}</Text>
                            <TextInput onChangeText={(text) => handleScore(text, 'player3')} style={{ width: 50 }} />
                        </View>
                    )}
                    {player4.name && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>{player4.name}</Text>
                            <TextInput onChangeText={(text) => handleScore(text, 'player4')} style={{ width: 50 }} />
                        </View>
                    )}
                    {player5.name && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <Text style={{ fontSize: 20 }}>{player5.name}</Text>
                            <TextInput onChangeText={(text) => handleScore(text, 'player5')} style={{ width: 50 }} />
                        </View>
                    )}
                </View>
                <TouchableOpacity onPress={() => addScore(false)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
            </Modal>
        </>
    )

}

export default Home;