import DangerAlert, { AlertTypes } from "@/components/DangerAlert";
import { GRAY, WHITE } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// export const signOut = async () => {
//   return await signOutFirebase(getAuth());
// }

const ProfileScreen = () => {
  const {top} =useSafeAreaInsets();
  //const [uri, setUri] = useState(source.uri);
  const user =
{  
  email: "my@email.com",
  password:"1234",
  photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XoPjQdTqqsNsCTzqcir0ygXQ4bfaxolK3A&s",
  displayName:'Hangyodon',
}
const [visible, setVisible] = useState(false);

    return (
        <View style={[styles.container, {paddingTop:top}]}>
          <DangerAlert 
          visible={visible} 
          onClose={() => setVisible(false)} 
          alertType={AlertTypes.LOGOUT}
          onConfirm={async () => {
           
          }}
          />
          <View style={styles.settingButton}>
            <Pressable onPress={() => setVisible(true)} hitSlop={10}>
              <MaterialCommunityIcons 
                name="logout-variant"
                size={24}
                color={GRAY.DARK}
              />
            </Pressable>
          </View>

          <View style={styles.profile}>
            <View
              style={[
                styles.photo,
                // user.PHOTO_URL || {backgroundColor: GRAY.DEFUALT},
              ]}
            >
              <Image source={{uri: user.photoURL }} style={styles.photo} />
              <Pressable
                style={styles.editButton}
                onPress={() => console.log('UPDATE')}
              >
                <MaterialCommunityIcons 
                  name="pencil"
                  size={20}
                  color={WHITE}
                />
              </Pressable>
            </View>

              <Text style={styles.nickname}>
                {user.displayName || 'nickname'}
              </Text>
          </View>

          <View style={styles.listContainer}></View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:WHITE,
    },
    settingButton:{
      paddingHorizontal:20,
      alignItems:'flex-end',
    },
    profile:{
      justifyContent:'center',
      alignItems:'center',
      borderBottomWidth:0.5,
      borderBottomColor:GRAY.DEFUALT,
      paddingBottom:20,
    },
    photo:{
      width:100,
      height:100,
      borderRadius:50,
    },
    editButton:{
      position:'absolute',
      bottom:0,
      right:0,
      width:30,
      height:30,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:GRAY.DARK,
    },
    nickname:{
      marginTop:10,
      fontSize:24,
      fontWeight:'500',
    },
    listContainer:{
     flex:1,
    },
  });
  
  export default ProfileScreen;