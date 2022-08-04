import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../constants'

interface ButtonProps {
  title: string
  backgroundColor: string
  textColor: string
  onPress: (title: string) => void
}

const Button = ({title, backgroundColor, textColor, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(title)
      }}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: 65,
    width: 65,
    marginHorizontal: 12,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    color: colors.darkGray,
  },
})
