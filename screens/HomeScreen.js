import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../context/app_context'

export default function HomeScreen({ navigation }) {

    const { fontLoaded } = useContext(AppContext)

    const colors = [
        // 'red',
        // 'orange',
        // 'yellow',
        // 'blue',
        // 'green',
        'purple',
        'cyan',
        'salmon',
        'lime',
        'gold',
        'magenta',
    ]
    
    const buster = 'BUSTER'

    return (
        <SafeAreaView style={{ backgroundColor: 'rgba(156, 82, 139, .5)' }}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={[styles.red, styles.font]}>C</Text>
                    <Text style={[styles.orange, styles.font]}>O</Text>
                    <Text style={[styles.yellow, styles.font]}>L</Text>
                    <Text style={[styles.blue, styles.font]}>O</Text>
                    <Text style={[styles.green, styles.font]}>R</Text>
                </View>

                <View style={styles.bottom}>
                    {
                        buster.split('').map((letter, index) => {
                            return <Text key={index} style={[styles.text, {color: colors[index]}]}>{letter}</Text>
                        })
                    }
                </View>

                <View>
                    <Text style={styles.subtitle}>the brain game</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Mode')
                        }}
                    >
                        <Text style={{ 'fontFamily': 'Caveat', 'fontSize': 20}}>PLAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
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
    container : {
        // borderColor: 'red',
        // borderWidth: 3,
        height: '100%',
        // width: '100%',
        alignItems  : 'center',
        justifyContent: 'center',
        // backgroundColor: 'inherit',
        // backgroundColor: 'rgba(255, 191, 70, .5)',
    },
    top : {
        flexDirection: 'row',
        // borderColor: 'yellow',
        // borderWidth: 2,
        // height: '100%'
        // marginTop: -90,
    },
    font: {
        fontSize: '90%',
        fontFamily: 'Sixtyfour Convergence',
        // fontFamily: 'Londrina Sketch',
        transform: [{ scaleY: 2}],
        marginBottom: 60,
        marginTop: -50,
    },
    red: {
        color: 'red',
    },  
    orange: {
        color: 'orange',
    },  
    yellow: {
        color: 'yellow',
    },  
    blue: {
        color: 'blue',
    },  
    green: {
        color: 'green',
    },  
    bottom: {
        flexDirection: 'row',
    },
    text: {
        // fontSize: 100,
        fontSize: '90%',
        // borderWidth: 5,
        fontFamily: 'Sixtyfour Convergence',
        flex: 1,
        textAlign: 'center',
        transform: [{ scaleY: 2}],
    },
    subtitle : {
        // fontStyle: "italic",
        marginBottom: 50,
        fontFamily: 'Caveat',
        // marginTop: 25,
        color: 'rgba(97, 15, 127, .8)'
    },
    buttonContainer : {
        // borderWidth: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    button : {
        display: 'flex',
        // backgroundColor: 'tan',
        padding: 10,
        // width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        aspectRatio: 1,
        // fontWeight: 'bold',
        backgroundColor: 'rgba(174, 173, 240, 1)',
        borderColor: 'rgba(86, 86, 118, 1)',
        borderWidth: 1,
    },
})