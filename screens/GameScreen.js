import { useContext, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { AppContext } from '../context/app_context'

export default function GameScreen () {

    const { mode, allQuestions, GAME_LENGTH, getColors } = useContext(AppContext)
    
    // remove first empty question
    // allQuestions.shift()
    console.log(allQuestions, allQuestions.length)

    useEffect(() => {
        if(allQuestions.length < 5){
            getColors()
        } else {
            console.log('ALL QUESTIONS:', allQuestions)
            console.log(allQuestions.length)
        }
    }, [allQuestions])

    return (
      <SafeAreaView>
        <Text> GAME {mode} </Text>

        <View style={styles.roundContainer}>

            <Text></Text>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    what: {},
    roundContainer: {
        borderWidth: 2
    },
    what: {},
})
