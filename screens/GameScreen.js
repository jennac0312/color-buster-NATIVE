import { useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { AppContext } from '../context/app_context'

export default function GameScreen () {

    const { mode } = useContext(AppContext)

    return (
      <SafeAreaView>
        <Text> GAME {mode} </Text>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    what: {},
})
