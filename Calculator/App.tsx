import React, {useState} from 'react'
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

//wb-sunny
//nightlight-round

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode(!darkMode)

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
      fontSize: 45,
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
        <Text style={styles.text}>2+7</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.resultText}>9</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="C"
            backgroundColor={colors.red}
            textColor={darkMode ? colors.darkGray : colors.white}
            onPress={() => {}}
          />
          <Button
            title="DEL"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
          <Button
            title="%"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
          <Button
            title="/"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="7"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="8"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="9"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="*"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="4"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="5"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="6"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="-"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="1"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="2"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="3"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="+"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={colors.green}
            onPress={() => {}}
          />
        </View>
        <View style={styles.keyboardRowContainer}>
          <Button
            title="+/-"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="0"
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="."
            backgroundColor={darkMode ? colors.darkGray : colors.lightGray}
            textColor={darkMode ? colors.white : colors.lightBlack}
            onPress={() => {}}
          />
          <Button
            title="="
            backgroundColor={colors.green}
            textColor={darkMode ? colors.darkGray : colors.white}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App
