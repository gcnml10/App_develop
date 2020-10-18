import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, onPress, Alert } from 'react-native';

export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <Text style={styles.textStyle}>나만의 꿀팁</Text>
        <Image
          source={{ uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c" }}
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.innerOne}>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
            <Text style={styles.textStyle2}>생활</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
              <Text style={styles.textStyle2}>재테크</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
            <Text style={styles.textStyle2}>반려견</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
            <Text style={styles.textStyle2}>꿀팁 찜</Text>
            </TouchableOpacity>
            </ScrollView> 
        </View>
        <View style={styles.innerTwo}>
          <Image 
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}} 
            style={styles.imageStyle2}
            resizeMode={"cover"}
            />
          <View style={styles.innerInOne}>
            
          </View>
          <View style={styles.innerInTwo}>
            <Text>먹다 남은 피자를 촉촉하게!</Text>
            <Text>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>

          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerOne: {
    flex: 2,
  },
  containerTwo: {
    flex: 3,
    flexDirection: "column",
  },
  innerOne: {
    flex: 1,

  },
  innerTwo: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
    padding: 10,
  },
  innerInOne: {
    flex: 1
  },
  innerInTwo: {
    flex: 2
  },
  imageStyle: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: "left",
    fontSize: 27,
    marginTop:20,
  },
  textContainer: {
    height:50,
    width:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    // margin:10,
    marginRight:15,
    marginTop:20,    
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle2: {
    textAlign:"center",
  },
  imageStyle2: {
    height:70,
    width:100,
    borderRadius:10,
  }
});