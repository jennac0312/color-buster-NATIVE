import { useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button, TouchableOpacity, Touchable, TouchableWithoutFeedback } from 'react-native'
import { AppContext } from '../context/app_context'

export default function ModeScreen () {

    const handlePress = (mode) => {
        console.log(`mode is ${mode}`)
    }

    const { test } = useContext(AppContext)

    return (
      <SafeAreaView>
        <Text style={styles.title}> CHOOSE YOUR MODE</Text>
        <Text>{test}</Text>

        <View style={styles.modeContainer}>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('easy')}
            >
                <Text style={styles.button}>Easy</Text>
                <Text>4 choices</Text>
                <Text>Words on white tile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('hard')}
            >
                <Text style={styles.button}>Hard</Text>
                <Text>4 choices</Text>
                <Text>No words, just colored tiles</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('speed')}
            >
                <Text style={styles.button}>Speed</Text>
                <Text>60 seconds</Text>
                <Text>How fast are you?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.mode}
                onPress={() => handlePress('arcade')}
            >
                <Text style={styles.button}>Arcade</Text>
                <Text>One Rule:</Text>
                <Text style={{color: 'red', fontStyle: 'italic'}}>Don't miss</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    modeContainer: {
        borderWidth: 2,
        borderColor: 'lime',
        // flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 30,
    },
    what: {},
})  