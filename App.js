import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Excersise1 from "./Excersise1";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>    
      <Excersise1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
