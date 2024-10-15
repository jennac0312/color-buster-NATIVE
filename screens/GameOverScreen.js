import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app_context'

const { width } = Dimensions.get('window')

export default function GameOverScreen({ navigation }) {

  const { mode, score, setScore, gameLength, Database } = useContext(AppContext)

  const [ highScore, setHighScore ] = useState(0)
  const [ newRecord, setNewRecord ] = useState(0)

  useEffect(() => {
    const fetchHighScore = async() => {
      if( mode === 'arcade'){
        console.log('arcade mode gathering high score')
        const fetchedHighScore = await Database.getHighScore()
        setHighScore(fetchedHighScore)

        if(score > highScore){
          setNewRecord(score)
        } else {
          setNewRecord(0)
        }
        Database.insertNewScore(score)
      }
    }

    fetchHighScore()
  }, [mode, score, Database])

  const handleResetGame = () => {
    navigation.reset({
      index: 3,
      routes: [{name: 'Home'}]
    })
    setScore(0) // reset score

    // reset records
    // setHighScore(null)
    setNewRecord(0)
    // Database.deleteAllScores()
  }

  console.log('score: ', score)
  console.log('total: ', gameLength)
  console.log('HIGH SCORE: ', highScore)
  console.log('RECORD: ', newRecord)
  console.log('DATABASE: ', Database.test)

    return (
      <SafeAreaView style={styles.fullScreen}>
      
        <Text style={{ 'textAlign': 'center', fontFamily : 'caveat', fontSize: 20, color: 'rgba(97, 15, 127, .5)'}}> {mode} </Text>

        <View style={ styles.container }>
          <Text style={styles.title}>GAME OVER</Text>

            { newRecord > highScore &&
              <View style={styles.congratulations}>
                <Text style={styles.congratulationsText}>CONGRATULATIONS!</Text>
                <Text style={styles.congratulationsText}> NEW RECORD</Text>
              </View>
            }{
              highScore > 0 && highScore > newRecord &&
                <View style={ styles.highScore}>
                  <Text style={styles.highScoreText}>Current Record: {highScore}</Text>
                </View>
            }

          <View style={ styles.reportContainer }>
            {
              mode !== 'arcade' &&
                <Text style={{ fontFamily: 'Caveat', fontSize: 30 }}>You scored </Text>
            }
            <Text style={styles.score}>{score}</Text>
            {
              mode !== 'arcade' &&
                <Text style={{ fontFamily: 'Caveat', fontSize: 30 }}>out of {gameLength}</Text>
            }
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
    backgroundColor: 'rgba(156, 82, 139, .5)',
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
  highScore: {
    borderWidth: 2,
    alignItems: 'center',
    // position: 'absolute',
    // left: '50%',
    // transform: [{ translateX: (-width/2) }],
    top: '5%',
  },
  highScoreText: {
    fontFamily: 'Bungee',
    fontSize: 30,
  },
  congratulations: {
    // borderWidth: 2,
    alignItems: 'center',
    // position: 'absolute',
    // left: '50%',
    // transform: [{ translateX: (-width/2) }],
    top: '5%',
  },
  congratulationsText: {
    fontFamily: 'Bungee',
    fontSize: 30,
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
    fontSize: 200,
    color: 'rgba(47, 1, 71, 1)'
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
