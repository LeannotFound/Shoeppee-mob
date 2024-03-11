import { StyleSheet, Text, View, Button, Pressable, Image} from "react-native";
import {router} from 'expo-router'


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={{height:280, width:220}} source={require('../assets/Logo.png')}/>
        <Text style={styles.title}>Shoeppee</Text>
       <Button title="Shop now!" color={"#F24E1E"} onPress={()=>router.navigate({pathname : "/home"})}></Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
