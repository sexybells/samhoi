import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Modal, TextInput, RadioButton} from 'react-native-paper';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalScore, setModalScore] = useState(false);
  const [checked, setChecked] = useState(4);
  const [player1, setPlayer1] = useState({name: '', totalScore: 0});
  const [player2, setPlayer2] = useState({name: '', totalScore: 0});
  const [player3, setPlayer3] = useState({name: '', totalScore: 0});
  const [player4, setPlayer4] = useState({name: '', totalScore: 0});
  const [player5, setPlayer5] = useState({name: '', totalScore: 0});
  const [players, setPlayers] = useState({
    player1: {name: '', totalScore: 0},
    player2: {name: '', totalScore: 0},
    player3: {name: '', totalScore: 0},
    player4: {name: '', totalScore: 0},
    player5: {name: '', totalScore: 0},
  });
  const [score, setScore] = useState([]);
  const [score1, setScore1] = useState([]);
  const [formScore, setFormScore] = useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
  });
  const handlePlayers = (e, key) => {
    switch (key) {
      case 1:
        setPlayer1({...player1, name: e});
        break;
      case 2:
        setPlayer2({...player2, name: e});
        break;
      case 3:
        setPlayer3({...player3, name: e});
        break;
      case 4:
        setPlayer4({...player4, name: e});
        break;
      case 5:
        setPlayer5({...player5, name: e});
        break;
      default:
        break;
    }
  };
  const handleChecked = value => {
    setChecked(value);
  };

  const handleScore = (e, key) => {
    setFormScore({...formScore, [key]: e});
  };

  const addScore = () => {
    let key = Object.keys(formScore);
    if (checked === 4) {
      key = key.filter(v => v !== 'player5');
      const newObject = {...formScore};
      delete newObject.player5;
      scoreUpgrade(newObject)
      // newObject[log[0]] = total;
    } else {
      console.log(checked)
      scoreUpgrade(formScore)
    }
  };

  const scoreUpgrade = (obj) => {
    const log = Object.keys(obj).filter(key => obj[key] === '');
    let total = 0;
    const params = {};
    for (const key in obj) {
      if (obj[key] !== '') {
        params[key] = `-${obj[key]}`;
        updateScore(key, obj[key], 'subtraction');
        total += parseInt(obj[key]);
      }
    }
    console.log(params);
    updateScore(log[0], total, 'addition');
    params[log[0]] = total;
    params.flag = 0;
    score.push(params);
    setScore(score);
    setModalScore(false);
    setFormScore({
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
    });
  }

  const updateScore = (key, score, calculation) => {
    switch (key) {
      case 'player1':
        const total1 = calculator(calculation, player1.totalScore, score);
        setPlayer1({...player1, totalScore: total1});
        break;
      case 'player2':
        const total2 = calculator(calculation, player2.totalScore, score);
        setPlayer2({...player2, totalScore: total2});
        break;
      case 'player3':
        const total3 = calculator(calculation, player3.totalScore, score);
        setPlayer3({...player3, totalScore: total3});
        break;
      case 'player4':
        const total4 = calculator(calculation, player4.totalScore, score);
        setPlayer4({...player4, totalScore: total4});
        break;
      case 'player5':
        const total5 = calculator(calculation, player5.totalScore, score);
        setPlayer5({...player5, totalScore: total5});
        break;
      default:
        break;
    }
  };

  const calculator = (calculation, totalScore, score) => {
    if (calculation === 'subtraction') {
      return totalScore - score;
    } else {
      return totalScore + score;
    }
  };

  const attachFlag = key => {
    const update = {...score};
    update[key].flag = 1;
    setScore(update);
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View>
          {!player1.name && !player2.name && !player3.name && !player4.name && (
            <View>
              <TouchableOpacity
                onPress={() => setOpenModal(true)}
                style={{padding: 20}}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            {player1.name && (
              <View style={styles.boxInfo}>
                <View style={styles.boxName}>
                  <Text style={styles.textBox}>{player1.totalScore}</Text>
                </View>
                <View style={styles.boxTotal}>
                  <Text style={styles.textBox}>{player1.name}</Text>
                </View>
              </View>
            )}
            {player2.name && (
              <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.textBox}>{player2.totalScore}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.textBox}>{player2.name}</Text>
              </View>
            </View>
            )}
            {player3.name && (
              <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.textBox}>{player3.totalScore}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.textBox}>{player3.name}</Text>
              </View>
            </View>
            )}
            {player4.name && (
              <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.textBox}>{player4.totalScore}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.textBox}>{player4.name}</Text>
              </View>
            </View>
            )}
            {player5.name && (
              <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.textBox}>{player5.totalScore}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.textBox}>{player5.name}</Text>
              </View>
            </View>
            )}
          </View>
        </View>
        <ScrollView style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{flexDirection: 'column', justifyContent: 'space-around'}}>
              {score.map((v, k) => (
                <TouchableOpacity
                  onLongPress={() => attachFlag(k)}
                  key={k}
                  style={{
                    ...styles.scoreButton,
                    backgroundColor: v.flag === 1 && 'red',
                  }}>
                  <Text>{v.player1}</Text>
                  <Text>{v.player2}</Text>
                  <Text>{v.player3}</Text>
                  <Text>{v.player4}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        {player1.name && player2.name && player3.name && player4.name && (
          <View
            style={{
              position: 'absolute',
              margin: 20,
              zIndex: 9999,
              bottom: 0,
              right: 0,
            }}>
            <TouchableOpacity
              onPress={() => setModalScore(true)}
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                +
              </Text>
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
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Số người</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RadioButton
                value={4}
                onPress={() => handleChecked(4)}
                status={checked === 4 ? 'checked' : 'unchecked'}
              />
              <Text>4</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RadioButton
                value={5}
                onPress={() => handleChecked(5)}
                status={checked === 5 ? 'checked' : 'unchecked'}
              />
              <Text>5</Text>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 1"
              placeholderTextColor={'grey'}
              onChangeText={text => handlePlayers(text, 1)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 2"
              placeholderTextColor={'grey'}
              onChangeText={text => handlePlayers(text, 2)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 3"
              placeholderTextColor={'grey'}
              onChangeText={text => handlePlayers(text, 3)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 4"
              placeholderTextColor={'grey'}
              onChangeText={text => handlePlayers(text, 4)}
            />
          </View>
          {checked === 5 && (
            <View>
              <TextInput
                placeholder="Tên người chơi 5"
                placeholderTextColor={'grey'}
                onChangeText={text => handlePlayers(text, 5)}
              />
            </View>
          )}
          <TouchableOpacity onPress={() => setOpenModal(false)} style={{ padding: 20, backgroundColor: '#999999', margin: 10, borderRadius: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 19 }}>Close</Text>
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
        }}>
        <View>
          {player1.name && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 20}}>{player1.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => handleScore(text, 'player1')}
                style={{width: 50}}
              />
            </View>
          )}
          {player2.name && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 20}}>{player2.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => handleScore(text, 'player2')}
                style={{width: 50}}
              />
            </View>
          )}
          {player3.name && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 20}}>{player3.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => handleScore(text, 'player3')}
                style={{width: 50}}
              />
            </View>
          )}
          {player4.name && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 20}}>{player4.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => handleScore(text, 'player4')}
                style={{width: 50}}
              />
            </View>
          )}
          {player5.name && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 20}}>{player5.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={text => handleScore(text, 'player5')}
                style={{width: 50}}
              />
            </View>
          )}
        </View>
        <TouchableOpacity onPress={() => addScore(false)} style={{ padding: 20, backgroundColor: '#999999', margin: 10, borderRadius: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 19 }}>Close</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  scoreButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  boxInfo: {
    padding: 10,
  },
  boxName: {
    backgroundColor: '#FFCC00',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textBox: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  boxTotal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
