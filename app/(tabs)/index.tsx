import { Image, Text, View } from "react-native";

const HomeScreen = () => {
  return(
    <View>
      <Text>홈화면</Text>
      <Image 
        source={require('../../assets/images/react-logo.png')}
        style={{width:200,height:200}}
      />
      <Image 
        source={{
          uri:'https://i.namu.wiki/i/JPjBj5O9GazeoPx1vXS5nUt7AQLZsE6oAPRvFGqPd0p1FKd9WG70v5Rd22w-0af64ZGplG1Kiq625vqtgyBJ1A.webp'
        }}
        style={{width:200,height:200}}
      />
    </View>
  );
};

export default HomeScreen;
