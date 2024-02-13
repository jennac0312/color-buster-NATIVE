import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import ExampleDirection from '../components/ExampleDirection'
import { Link } from '@react-navigation/native'

const colors = [
    'cyan',
    'salmon',
    'gold',
    'magenta',
    'salmon',
    'yellow',
    'red',
    'lime',
]

const colorful = 'colorful'

export default function DirectionsScreen ({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> DIRECTIONS </Text>

        <View style={styles.subtitle}>
            <Text>a</Text>
            <View style={{flexDirection: 'row'}}>
            {
                colorful.split('').map((letter, index) => {
                    console.log(index)
                    return <Text key={index} style={[styles.colorful, {color: colors[index]}]}>{letter}</Text>
                })
            }
            </View>
            {/* <Text style={styles.colorful}>colorful</Text> */}
            <Text>brain teaser</Text>
        </View>

        <ExampleDirection />

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Mode')
                }}
            >
                <Text>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Linking.openURL('https://www.simplypsychology.org/stroop-effect.html#What-Is-The-Stroop-Effect')
                }}
            >
                <Text>READ THE SCIENCE</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'red',
        // backgroundColor: 'orange',
        height: '100%',
        alignItems: 'center',
    },
    title: {},
    subtitle: {
        borderWidth: 2,
        alignItems: 'center',
        // flexDirection: 'row',
        width: '100%',
    },
    colorful: {
        fontStyle: 'italic',
        fontSize: 80,
        flexDirection: 'row',
        // borderWidth: 2,
    },
    buttonContainer : {
        borderWidth: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    button : {
        display: 'flex',
        backgroundColor: 'tan',
        padding: 10,
        width: '25%',
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 'bold'
    },
})
