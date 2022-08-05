import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Button from './src/components/Button'
import {colors} from './src/constants'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const [currentNumber, setCurrentNumber] = useState('')
  const [lastNumber, setLastNumber] = useState('')

  useEffect(() => {
    getDarkMode()
  }, [])

  const storeDarkMode = async () => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(!darkMode))
    } catch (error) {
      console.log(error)
    }
  }

  const getDarkMode = async () => {
    try {
      const value = await AsyncStorage.getItem('darkMode')
      value === null ? setDarkMode(true) : setDarkMode(JSON.parse(value))
    } catch (error) {
      console.log(error)
    }
  }

  const handleInput = (btnPressed: string) => {
    if (
      btnPressed === '+' ||
      btnPressed === '-' ||
      btnPressed === '*' ||
      btnPressed === '/'
    ) {
      setCurrentNumber(currentNumber + btnPressed)
      return
    }

    switch (btnPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1))
        return
      case 'C':
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        setLastNumber(currentNumber + '=')
        calculate()
        return
    }
    setCurrentNumber(currentNumber + btnPressed)
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (
      lastArr === '/' ||
      lastArr === '*' ||
      lastArr === '-' ||
      lastArr === '+' ||
      lastArr === '.'
    ) {
      setCurrentNumber(currentNumber)
    } else {
      // eslint-disable-next-line no-eval
      let result = eval(currentNumber).toString()
      setCurrentNumber(result)
      return
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    storeDarkMode()
  }

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: darkMode ? colors.black : colors.white,
    },
    container: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: 20,
    },
    separator: {
      backgroundColor: colors.darkGray,
      height: 1,
      width: '90%',
      alignSelf: 'center',
      marginBottom: 20,
    },
    keyboardContainer: {
      flex: 5,
    },
    keyboardRowContainer: {
      flexDirection: 'row',
    },
    text: {
      color: darkMode ? colors.white : colors.black,
      fontSize: 25,
    },
    resultText: {
      color: colors.gray,
      fontSize: 40,
    },
    themeIcon: {
      position: 'absolute',
      top: 25,
      left: 25,
    },
  })

  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.themeIcon}>
        <Icon
          name={darkMode ? 'nightlight-round' : 'wb-sunny'}
          size={50}
          color={darkMode ? colors.white : colors.black}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{lastNumber}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="C"
            backgroundColor={colors.red}
            textColor={darkMode ? colors.darkGray : colors.white}
            onPress={() => {
              handleInput('C')
            }}
          />
          <Button
            title="DEL"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('DEL')
            }}
          />
          <Button
            title="%"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('%')
            }}
          />
          <Button
            title="/"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('/')
            }}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="7"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('7')
            }}
          />
          <Button
            title="8"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('8')
            }}
          />
          <Button
            title="9"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('9')
            }}
          />
          <Button
            title="*"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('*')
            }}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="4"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('4')
            }}
          />
          <Button
            title="5"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('5')
            }}
          />
          <Button
            title="6"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('6')
            }}
          />
          <Button
            title="-"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('-')
            }}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="1"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('1')
            }}
          />
          <Button
            title="2"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('2')
            }}
          />
          <Button
            title="3"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('3')
            }}
          />
          <Button
            title="+"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {
              handleInput('+')
            }}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="0"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('0')
            }}
            width={154}
          />
          <Button
            title="."
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {
              handleInput('.')
            }}
          />
          <Button
            title="="
            backgroundColor={colors.green}
            textColor={darkMode ? colors.darkGray : colors.white}
            onPress={() => {
              handleInput('=')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App
