import { Text, View, SafeAreaView, Button} from 'react-native'

export default function GameOverScreen({ navigation }) {

  const handleResetGame = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}]
    })
  }

    return (
      <SafeAreaView>
        <Text> GAME OVER </Text>
        <Button title="Play Again" onPress={handleResetGame}/>
      </SafeAreaView>
    )
}
