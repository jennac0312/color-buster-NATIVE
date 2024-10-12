import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../context/app_context'

export default function GameOverScreen({ navigation }) {

  const { mode, score, setScore, GAME_LENGTH } = useContext(AppContext)

  const handleResetGame = () => {
    navigation.reset({
      index: 3,
      routes: [{name: 'Home'}]
    })
    setScore(0) // reset score
  }

  console.log('score: ', score)
  console.log('total: ', GAME_LENGTH)

    return (
      <SafeAreaView style={styles.fullScreen}>
      
        <Text style={{ 'textAlign': 'center', fontFamily : 'caveat', fontSize: 20, color: 'rgba(0, 0, 0, .7)'}}> {mode} </Text>

        <View style={ styles.container }>
          <Text style={styles.title}>GAME OVER</Text>

          <View style={ styles.reportContainer }>
            <Text style={{ fontFamily: 'Caveat', fontSize: 30 }}>You scored </Text>
            <Text style={styles.score}>{score}</Text>
            <Text style={{ fontFamily: 'Caveat', fontSize: 30 }}>out of {GAME_LENGTH}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                handleResetGame()
                navigation.navigate('Home')
              }}
              >
              <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 25, textAlign: 'center'}}>Play Again</Text>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  fullScreen: {
    // borderWidth: 2,
    flex: 1,
    backgroundColor: 'rgba(100, 131, 129, .5)',
  },
  container: {
    // borderWidth: 2,
    // borderColor: 'red',
    flex: 1,
  },
  title: {
    // borderWidth: 2,
    // flexDirection: 'row',
    // flexGrow: 1,
    // flex: 1,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    fontSize: 30,
    fontFamily: 'Sixtyfour-Convergence',
    color: 'red',
    transform: [{ scaleY: 2 }],
    paddingTop: 15,
  },
  reportContainer: {
    // borderWidth: 2,
    // borderColor: 'lime',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  score: {
    fontFamily: 'Bungee',
    fontSize: '200%',
    color: 'rgba(227, 193, 111, 1)'
  },
  buttonContainer: {
    // borderWidth: 2,
    flex: 1,
  },
  button : {
    // display: 'flex',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 100,
    aspectRatio: 1,
    backgroundColor: 'rgba(174, 173, 240, 1)',
    borderColor: 'rgba(86, 86, 118, 1)',
    borderWidth: 1,
    position: 'absolute',
    bottom: 20,
    right: 40,
},
})
