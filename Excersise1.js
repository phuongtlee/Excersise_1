import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

const Excersise1 = () => {
  const onPress = () => {
    Alert.alert(`Đã đăng nhập user name là ${user} và password là ${pass}`);
  };
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <ImageBackground
      source={require("./img/wp2721266.jpg")}
      style={{
        ...styles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ ...styles.image }}
        source={require("./img/94694379_p0.jpg")}
      />

      <View style={{width: 400}}>
        <Text style={{ ...styles.text, fontStyle: "italic", margin: 5}}>REGISTER</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setUser}
          value={user}
          placeholder="set UserName"
        />

        <TextInput
          style={styles.textInput}
          onChangeText={setPass}
          value={pass}
          secureTextEntry
          placeholder="set Password"
        />

        <TouchableHighlight style={styles.button} onPress={onPress}>
          <Text style={{...styles.textButton, fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

export default Excersise1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    // flex: 1,
    width: 400,
    height: 200,
    // justifyContent: 'center',
    // alignContent:'center'
  },
  text: {
    textAlign: 'right',
    color: 'white'
  },
  textInput: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "aqua",
    padding: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    padding: 5,
    fontSize: 15,
  },
});
