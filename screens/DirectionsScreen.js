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
        {/* <Text style={styles.title}> DIRECTIONS </Text> */}

        <View style={styles.title}>
            <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20, 'marginBottom': -15}}>a</Text>
            <View style={{flexDirection: 'row'}}>
            {
                colorful.split('').map((letter, index) => {
                    return <Text key={index} style={[styles.colorful, {color: colors[index]}]}>{letter}</Text>
                })
            }
            </View>
            {/* <Text style={styles.colorful}>colorful</Text> */}
            <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20, 'marginTop': -5}}>brain teaser</Text>
        </View>

        <ExampleDirection />

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Mode')
                }}
            >
                <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20 }}>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Linking.openURL('https://www.simplypsychology.org/stroop-effect.html')
                }}
            >
                <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20 }}>THE SCIENCE</Text>
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'red',
        // backgroundColor: 'orange',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(156, 82, 139, .5)',
    },
    title: {
        alignItems: 'center',
    },
    colorful: {
        fontStyle: 'italic',
        fontSize: 70,
        flexBasis: 1,
        flexGrow: 1,
        flexDirection: 'row',
        // borderWidth: 2,
        fontFamily: 'Sixtyfour Convergence',
    },
    buttonContainer : {
        // borderWidth: 2,
        // marginTop: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 100,
    },
    button : {
        display: 'flex',
        // backgroundColor: 'tan',
        padding: 10,
        // width: '25%',
        alignItems: 'center',
        borderRadius: '50%',
        aspectRatio: 1,
        // fontWeight: 'bold',
        backgroundColor: 'rgba(174, 173, 240, 1)',
        borderColor: 'rgba(86, 86, 118, 1)',
        borderWidth: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
})