import { useContext, useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { AppContext } from '../context/app_context'

export default function GameScreen ({ navigation }) {

    const { mode, allQuestions, GAME_LENGTH, ARCADE_ROUNDS, getColors } = useContext(AppContext)

    const [ round, setRound ] = useState(0) //will need reset
    const [ currentQuestion, setCurrentQuestion ] = useState(null)

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
        } else {
            console.log('INCORRECT')
        }
        startNextRound()
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
      <SafeAreaView style={styles.game}>
        {/* <Text> GAME {mode} </Text> */}

        <View style={styles.roundContainer}>

            <Text
                style={[styles.name, {
                    color: `${allQuestions[round]?.style}`
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
                                <Text>{color}</Text>
                            </TouchableOpacity>
                        )
                    })
                    :
                    allQuestions[round]?.colors.map((color, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.option, {
                                    backgroundColor: color
                                }]}
                                onPress={() => {
                                    let answer = allQuestions[round]?.name
                                    let selected = color

                                    checkAnswer(answer, selected)
                                }}
                            >
                                <Text style={{color: 'transparent'}}>{color}</Text>
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
        backgroundColor: 'lavender'
    },
    roundContainer: {
        borderWidth: 2,
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
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -80
    },
    optionsContainer: {
        borderWidth: 2,
        borderColor: 'lime',
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
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: '30%',
        flexGrow: 1,
        aspectRatio: 1, // Maintain square shape
        margin: '2%', // Add margin between options
    },
    what: {},
})
