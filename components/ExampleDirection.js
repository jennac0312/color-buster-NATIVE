import { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ExampleDirection () {

    const [mode, setMode] = useState('easy')

    return (
      <View style={styles.container}>
        <Text style={styles.title}> HOW TO PLAY: </Text>

        <View style={styles.mode}>
            <Text>easy</Text>
            <Text style={styles.line}>|</Text>
            <Text>hard</Text>
        </View>
        
        <ScrollView 
            style={styles.scroll} 
            horizontal={true}
            // bounces={false}
            // contentInset={0}
            // disableIntervalMomentum={true}
            // snapToAlignment='center'
            // snapToInterval={10}
            // snapToAlignment={'center'}
            // decelerationRate={'fast'}
            // onScroll={() => console.log('scrolling')}
        >
            <View style={styles.easy}>
                <Text style={styles.exampleColor}>RED</Text>
                <View style={styles.optionsContainer}>
                    <View style={[styles.option, {position: 'relative'}]}>
                        <Text>yellow</Text>
                        <MaterialCommunityIcons name="gesture-tap" size={34} color="black" style={styles.tap}/>
                    </View>
                    <View style={styles.option}>
                        <Text>orange</Text>
                    </View>
                    <View style={styles.option}>
                        <Text>green</Text>
                    </View>
                    <View style={styles.option}>
                        <Text>red</Text>
                    </View>
                </View>

                {/* <> */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <Text style={styles.explanation}>Though the word spells </Text>
                        <Text style={[styles.explanation ,{color: 'red'}]}>RED</Text>
                        <Text style={styles.explanation}>, it's color is </Text>
                        <Text style={[styles.explanation ,{color: 'yellow'}]}>yellow</Text>
                        <Text style={styles.explanation}>.</Text>
                    </View>

                    <Text style={styles.explanation}>Therefore, the answer is yellow!</Text>
                {/* </> */}
            </View>
            <View style={styles.hard}>
                <Text style={styles.exampleColor}>RED</Text>
                <View style={styles.optionsContainer}>
                    <View style={[styles.option, { backgroundColor: 'yellow'}]}>
                        <Text>yellow</Text>
                    </View>
                    <View style={[styles.option, {backgroundColor: 'orange'}]}>
                        <Text>orange</Text>
                    </View>
                    <View style={[styles.option, {backgroundColor: 'green'}]}>
                        <Text>green</Text>
                    </View>
                    <View style={[styles.option, {position: 'relative', backgroundColor: 'red'}]}>
                        <Text>red</Text>
                        <MaterialCommunityIcons name="gesture-tap" size={34} color="black" style={styles.tap}/>
                    </View>
                </View>

                {/* <> */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <Text style={[styles.explanation ,{color: 'red'}]}>RED</Text>
                        <Text style={styles.explanation}> is colored in </Text>
                        <Text style={[styles.explanation ,{color: 'yellow'}]}>yellow</Text>
                        <Text style={styles.explanation}>, but don't be fooled.</Text>
                        <Text style={styles.explanation}>The answer is </Text>
                        <Text style={[styles.explanation ,{color: 'red'}]}>red</Text>
                        <Text>!</Text>
                    </View>
                {/* </> */}
            </View>
        </ScrollView>

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'red',
        margin: 100,
        // position: 'absolute',
        // top: '50%',
        // bottom: '50%',
        // left: '50%',
        // right: '50%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        // borderWidth: 2,
        // borderColor: 'tan',
        textDecorationLine: 'underline',
        textDecorationColor: 'tan'
    },
    mode: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    line: {
        marginLeft: 5,
        marginRight: 5,
    },
    scroll: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'lime',
        backgroundColor: 'lime',
        flexDirection: 'column',
        height: '50%',
    },
    easy: {
        width: '100%',
        // height: '100%',
        // height: 'inherit',
        borderWidth: 2,
        borderColor: 'pink',
        backgroundColor: 'grey',
        alignItems: 'center',
    },
    exampleColor: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'yellow'
    },
    optionsContainer: {
        borderWidth: 2,
        width: '100%',
        // height: '100%',
        height: 210,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'space-evenly',
    },
    option: {
        // flexGrow: 1,
        flexBasis: '40%',
        // height: '40%',
        height: 80,
        // width: '40%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    explanation: {
        fontSize: 20,
    },
    hard: {
        width: '100%',
        borderWidth: 4,
        justifySelf: 'flex-end',
        width: '100%',
        // height: '100%',
        // height: 'inherit',
        borderWidth: 2,
        borderColor: 'pink',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    tap: {
        position: "absolute",
        left: '75%',
        top: '50%',
        transform: [{rotate: '-30deg'}],
    },
})