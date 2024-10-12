import { useContext, useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Vibration, BackHandler } from 'react-native'
import { AppContext } from '../context/app_context'

export default function GameScreen ({ navigation }) {

    const { mode, allQuestions, GAME_LENGTH, ARCADE_ROUNDS, getColors } = useContext(AppContext)

    const [ round, setRound ] = useState(0) //will need reset
    const [ currentQuestion, setCurrentQuestion ] = useState(null)
    const [ feedbackColor, setFeedbackColor ] = useState('rgba(100, 131, 129, .5)')

    const endGame = () => {
        navigation.navigate('GameOver')
    }

    const startNextRound = () => {
        // check end of game
        if( round <  GAME_LENGTH - 1 ){
            setRound(cur => cur + 1)
            console.log('enter round:', round+2)
        } else {
            endGame()
        }
    }

    const checkAnswer = (answer, selected) => {
        if(answer === selected){
            console.log('CORRECT')
            setFeedbackColor('rgba(50, 205, 50, .5)')
        } else {
            console.log('INCORRECT... BUZZZZZ')
            setFeedbackColor('rgba(255, 0, 0, .5)')
            Vibration.vibrate() // default 500 ms
        }

        setTimeout(() => {
            setFeedbackColor('transparent')
            startNextRound()
        }, 200) // set feedback color back to transparent after ms

    }


    useEffect(() => {
        // arcade mode
        if(allQuestions.length < GAME_LENGTH){
            console.log('LENGTH IS LESS THAN', GAME_LENGTH)
            getColors()
        } else {
            console.log('ALL QUESTIONS:', allQuestions)
            console.log(allQuestions.length)
        }
    }, [allQuestions])

    useEffect(() => {
        setCurrentQuestion(allQuestions[round])
        console.log('CURRENT QUESTION:', currentQuestion)
    }, [round])


    console.log('CURRENT:', allQuestions[round])
    return allQuestions[round] !== undefined ? 
    (
      <SafeAreaView style={[ styles.game, { backgroundColor: feedbackColor } ]}>
        <Text style={{ 'textAlign': 'center', fontFamily : 'caveat', fontSize: 20, color: 'rgba(0, 0, 0, .7)'}}> {mode} </Text>

        <View style={[ styles.roundContainer ]}>

            <Text
                style={[styles.name, {
                    color:  allQuestions[round]?.style === 'brown' ? 'rgba(148, 104, 70, 1)' : `${allQuestions[round]?.style}`
                }]}
            >
                {allQuestions[round]?.name.toUpperCase()}
            </Text>

            <View style={styles.optionsContainer}>

                {
                    mode === 'easy' ?
                    allQuestions[round]?.colors.map((color, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => {
                                    let answer = allQuestions[round]?.style
                                    let selected = color

                                    checkAnswer(answer, selected)
                                }}
                            >
                                <Text style={{ fontFamily: 'Bungee' }}>{color}</Text>
                            </TouchableOpacity>
                        )
                    })
                    :
                    allQuestions[round]?.colors.map((color, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.option, {
                                    backgroundColor: color === 'brown' ? 'rgba(148, 104, 70, 1)' : color
                                }]}
                                onPress={() => {
                                    let answer = allQuestions[round]?.name
                                    let selected = color

                                    checkAnswer(answer, selected)
                                }}
                            >
                                <Text style={{color: 'transparent', fontFamily: 'Bungee'}}>{color}</Text>
                            </TouchableOpacity>
                        )
                    })

                }
            </View>
        </View>

      </SafeAreaView>
    )
    :
    (
        <SafeAreaView style={{backgroundColor: 'red'}}>

        <Text>ALL QUESTIONS[ROUND]{allQuestions[round]}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    game: {
        // alignItems: 'center'
        height: '100%',
        // position: 'relative',
        // backgroundColor: 'lavender',
        // backgroundColor: '#575761',
        // backgroundColor: 'rgba(100, 131, 129, .5)',
    },
    roundContainer: {
        // borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        // top: '50%',
        // bottom: '50%',
        // left: '50%',
        // right: '50%',
        width: '100%',
        height: '100%',
    },
    name: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -80,
        // fontFamily: 'Rubik Bubbles',
        fontFamily: 'Bungee',
        // transform: [{ scaleY: 2}],
    },
    optionsContainer: {
        // borderWidth: 10,
        // borderColor: 'rgba(148, 104, 70, 1)',
        justifyContent: 'space-evenly',
        // alignItems: 'space-evenly',
        // alignContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: '70%',
        // flexBasis: '50%',
        width: '100%',
        // flexGrow: 1, // Allow the container to grow vertically
    },
    option: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .8)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: '30%',
        flexGrow: 1,
        aspectRatio: 1, // Maintain square shape
        margin: '2%', // Add margin between options
        backgroundColor: 'whitesmoke',
    },
})
