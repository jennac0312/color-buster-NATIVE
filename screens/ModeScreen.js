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


    return (
      <SafeAreaView style={styles.fullScreen}>
        <Text style={styles.title}>~ CHOOSE YOUR MODE ~</Text>

        <View style={styles.modeContainer}>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('easy')}
            >
                <View style={styles.wordContainer.top}>
                    <Text style={styles.button}>Easy</Text>
                    <Text>4 choices</Text>
                    <Text>Words on white tile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('hard')}
            >
                <View style={styles.wordContainer.top}>
                    <Text style={styles.button}>Hard</Text>
                    <Text>4 choices</Text>
                    <Text>No words, just colored tiles</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('speed')}
            >
                <View style={styles.wordContainer.bottom}>
                    <Text style={styles.button}>Speed</Text>
                    <Text>60 seconds</Text>
                    <Text>How fast are you?</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('arcade')}
            >
                <View style={styles.wordContainer.bottom}>
                    <Text style={styles.button}>Arcade</Text>
                    <Text>One Rule:</Text>
                    <Text style={{color: 'red', fontStyle: 'italic'}}>Don't miss</Text>
                </View>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'Londrina Sketch',
    },
    modeContainer: {
        borderWidth: 2,
        borderColor: 'lime',
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    mode: {
        borderWidth: 1,
        borderStyle: 'dotted',
        flexBasis: '50%',
        width: '50%',
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    button: {
        fontSize: 35,
        fontFamily: 'Sixtyfour Convergence'
    },
    what: {},
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
    }
})  