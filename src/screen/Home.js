import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Modal, TextInput, RadioButton } from "react-native-paper";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalScore, setModalScore] = useState(false);
  const [checked, setChecked] = useState(4);
  const [player1, setPlayer1] = useState({ name: "", totalScore: 0 });
  const [player2, setPlayer2] = useState({ name: "", totalScore: 0 });
  const [player3, setPlayer3] = useState({ name: "", totalScore: 0 });
  const [player4, setPlayer4] = useState({ name: "", totalScore: 0 });
  const [player5, setPlayer5] = useState({ name: "", totalScore: 0 });
  const [players, setPlayers] = useState([]);
  const [score, setScore] = useState({
    player1: ["0"],
    player2: ["0"],
    player3: ["0"],
    player4: ["0"],
    player5: ["0"],
  });
  const [score1, setScore1] = useState([]);
  const [formScore, setFormScore] = useState({ player1: "", player2: "", player3: "", player4: "", player5: "" });
  const handlePlayers = (e, key) => {
    switch (key) {
      case 1:
        setPlayer1({ ...player1, name: e });
        break;
      case 2:
        setPlayer2({ ...player2, name: e });
        break;
      case 3:
        setPlayer3({ ...player3, name: e });
        break;
      case 4:
        setPlayer4({ ...player4, name: e });
        break;
      case 5:
        setPlayer5({ ...player5, name: e });
        break;
      default:
        break;
    }
  };
  const handleChecked = (value) => {
    setChecked(value);
  };

  const handleScore = (e, key) => {
    setFormScore({ ...formScore, [key]: e });
  };

  const addScore = () => {
    let key = Object.keys(formScore);
    if (checked === 4) {
      key = key.filter((v) => v !== "player5");
      const newObject = { ...formScore };
      delete newObject.player5;
      const log = Object.keys(newObject).filter(key => newObject[key] === "");
      let total = 0;
      for (const key in newObject) {
        if (newObject[key] !== "") {
          score[key].push(newObject[key]);
          setScore({ ...score, [key]: score[key] });
          updateScore(key, newObject[key], "subtraction");
          total += parseInt(newObject[key]);
        }
      }
      updateScore(log[0], total, "addition");
      score[log[0]].push(total.toString());
      setScore({ ...score, [log[0]]: score[log[0]] });
      console.log(score);
      // newObject[log[0]] = total;
    }
  };

  const updateScore = (key, score, calculation) => {
    switch (key) {
      case "player1":
        const total1 = calculator(calculation, player1.totalScore, score);
        setPlayer1({ ...player1, totalScore: total1 });
        break;
      case "player2":
        const total2 = calculator(calculation, player2.totalScore, score);
        setPlayer2({ ...player2, totalScore: total2 });
        break;
      case "player3":
        const total3 = calculator(calculation, player3.totalScore, score);
        setPlayer3({ ...player3, totalScore: total3 });
        break;
      case "player4":
        const total4 = calculator(calculation, player4.totalScore, score);
        setPlayer4({ ...player4, totalScore: total4 });
        break;
      case "player5":
        const total5 = calculator(calculation, player5.totalScore, score);
        setPlayer5({ ...player5, totalScore: total5 });
        break;
      default:
        break;
    }
  };

  const calculator = (calculation, totalScore, score) => {
    if (calculation === "subtraction") {
      return totalScore - score;
    } else {
      return totalScore + score;
    }
  };


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

          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View>
              {player1.name && (
                <View>
                  <Text>{player1.name}</Text>
                  <Text>{player1.totalScore}</Text>
                </View>
              )}
            </View>
            <View>
              {player2.name && (
                <View>
                  <Text>{player1.name}</Text>
                  <Text>{player2.totalScore}</Text>
                </View>
              )}
            </View>
            <View>
              {player3.name && (
                <View>
                  <Text>{player1.name}</Text>
                  <Text>{player3.totalScore}</Text>
                </View>
              )}
            </View>
            <View>
              {player4.name && (
                <View>
                  <Text>{player1.name}</Text>
                  <Text>{player4.totalScore}</Text>
                </View>
              )}
            </View>
            <View>
              {player5.name && (
                <View>
                  <Text>{player1.name}</Text>
                  <Text>{player5.totalScore}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <ScrollView
          style={{ marginTop: 20 }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {player1.name && (
              <View style={{ flexDirection: "column" }}>
                {score.player1.map((v, k) => (
                  <View key={k}>
                    <Text>{v}</Text>
                  </View>
                ))}
              </View>
            )}
            <View>
              {player2.name && (
                <View style={{ flexDirection: "column" }}>
                  {score.player2.map((v, k) => (
                    <View key={k}>
                      <Text>{v}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
            <View>
              {player3.name && (
                <View style={{ flexDirection: "column" }}>
                  {score.player3.map((v, k) => (
                    <View key={k}>
                      <Text>{v}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
            <View>
              {player4.name && (
                <View style={{ flexDirection: "column" }}>
                  {score.player4.map((v, k) => (
                    <View key={k}>
                      <Text>{v}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
            <View>
              {player5.name && (
                <View style={{ flexDirection: "column" }}>
                  {score.player5.map((v, k) => (
                    <View key={k}>
                      <Text>{v}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        {player1.name && player2.name && player3.name && player4.name && (
          <View style={{ position: "absolute", margin: 20, zIndex: 9999, bottom: 0, right: 0 }}>
            <TouchableOpacity onPress={() => setModalScore(true)} style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
            }}>
              <Text style={{ fontSize: 20, color: "black", textAlign: "center" }}>+</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
      <Modal
        visible={openModal}
        contentContainerStyle={{
          backgroundColor: "grey",
          padding: 20,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>
              Số người
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <RadioButton value={4} onPress={() => handleChecked(4)}
                           status={checked === 4 ? "checked" : "unchecked"} />
              <Text>4</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <RadioButton value={5} onPress={() => handleChecked(5)}
                           status={checked === 5 ? "checked" : "unchecked"} />
              <Text>5</Text>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 1"
              placeholderTextColor={"grey"}
              onChangeText={(text) => handlePlayers(text, 1)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 2"
              placeholderTextColor={"grey"}
              onChangeText={(text) => handlePlayers(text, 2)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 3"
              placeholderTextColor={"grey"}
              onChangeText={(text) => handlePlayers(text, 3)}
            />
          </View>
          <View>
            <TextInput
              placeholder="Tên người chơi 4"
              placeholderTextColor={"grey"}
              onChangeText={(text) => handlePlayers(text, 4)}
            />
          </View>
          {checked === 5 && (
            <View>
              <TextInput
                placeholder="Tên người chơi 5"
                placeholderTextColor={"grey"}
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
          backgroundColor: "grey",
          padding: 20,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <View>
          {player1.name && (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{player1.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => handleScore(text, "player1")}
                style={{ width: 50 }}
              />
            </View>
          )}
          {player2.name && (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{player2.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => handleScore(text, "player2")}
                style={{ width: 50 }}
              />
            </View>
          )}
          {player3.name && (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{player3.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => handleScore(text, "player3")}
                style={{ width: 50 }}
              />
            </View>
          )}
          {player4.name && (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{player4.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => handleScore(text, "player4")}
                style={{ width: 50 }}
              />
            </View>
          )}
          {player5.name && (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{player5.name}</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => handleScore(text, "player5")}
                style={{ width: 50 }}
              />
            </View>
          )}
        </View>
        <TouchableOpacity onPress={() => addScore(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );

};

export default Home;
