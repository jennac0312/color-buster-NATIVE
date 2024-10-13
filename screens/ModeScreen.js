import { useContext, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity, Touchable, TouchableWithoutFeedback } from 'react-native'
import { AppContext } from '../context/app_context'

export default function ModeScreen ({ navigation }) {
    
    const { fontLoaded, mode, setMode, allQuestions, setAllQuestions } = useContext(AppContext)
    

    const handlePress = (mode) => {
        console.log(`mode is ${mode}`)
        setMode(mode)

        // navigate to game screen
        navigation.navigate('Game')
    }

    // reset questions on mount ... except stack screens dont remount ?? NEEDS WORK
    useEffect(() => {
        setAllQuestions([])
        console.log('resetting qs:', allQuestions)
    }, [])

    const gameModes = [
        {
            mode: 'easy',
            desc1: '4 choices',
            desc2: 'Words on white tile'
        },
        {
            mode: 'hard',
            desc1: '4 choices',
            desc2: 'No words, only colors'
        },
        {
            mode: 'speed',
            desc1: '60 seconds',
            desc2: 'How fast are you?'
        },
        {
            mode: 'arcade',
            desc1: 'One Rule:',
            desc2: 'Don\'t miss'
        },
    ]


    return (
      <SafeAreaView style={styles.fullScreen}>
        {/* <Text style={styles.title}>~ CHOOSE YOUR MODE ~</Text> */}

        <View style={styles.modeContainer}>
            {
                gameModes.map((mode, idx) => {
                    return (
                        <TouchableOpacity
                        key={idx}
                        style={styles.mode}
                        onPress={() => handlePress(mode.mode)}
                        >
                        <View style={ (mode.mode == 'easy' || mode.mode == 'hard') ? styles.wordContainer.top : styles.wordContainer.bottom }>
                            <Text style={styles.button}>{mode.mode.toUpperCase()}</Text>
                            <Text style={ styles.defaultFont }>{mode.desc1}</Text>
                            <Text style={[ styles.defaultFont, ( mode.mode == 'arcade' && { color: 'crimson', 'fontStyle': 'italic', 'fontWeight': 'bold' }) ]}>{mode.desc2}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                })
            }
            <View style={styles.directionButtonContainer}>
                <TouchableOpacity 
                    style={styles.directionButton}
                    onPress={() => {
                        navigation.navigate('Directions')
                    }}
                >
                    <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20}}>DIRECTIONS</Text>
                </TouchableOpacity>
            </View>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: 'rgba(156, 82, 139, .5)',
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'Londrina Sketch',
    },
    defaultFont: {
        // fontFamily: 'Edu Australia VIC WA NT Hand Dots',
        // fontSize: 20
    },
    modeContainer: {
        // borderWidth: 2,
        // borderColor: 'lime',
        flex: 1,
        // height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    mode: {
        // borderWidth: 1,
        // borderStyle: 'dotted',
        // borderColor: 'rgba(174, 173, 240, 1)',
        // flexBasis: '50%',
        width: '50%',
        height: '20%',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // flex: .5,
    },
    button: {
        fontSize: 35,
        fontFamily: 'Sixtyfour Convergence',
        // color: 'rgba(86, 86, 118, 1)',
        color: 'rgba(97, 15, 127, 1)'
    },
    wordContainer: {
        top: {
            flex: 1,
            // borderWidth: 2,
            // borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 15,
        },
        bottom: {
            flex: 1,
            // borderWidth: 2,
            // borderColor: 'red',
            alignItems: 'center',
            padding: 15,
        }
    },
    directionButtonContainer : {
        // borderWidth: 2,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: '10%',
    },
    directionButton : {
        padding: 10,
        justifyContent: 'center',
        borderRadius: '50%',
        aspectRatio: 1,
        backgroundColor: 'rgba(174, 173, 240, 1)',
        borderColor: 'rgba(86, 86, 118, 1)',
        borderWidth: 1,
    },
})  