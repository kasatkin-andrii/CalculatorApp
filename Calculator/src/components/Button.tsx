import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../constants'

interface ButtonProps {
  title: string
  backgroundColor: string
  textColor: string
  onPress: () => void
  width?: number
}

const Button = ({
  title,
  backgroundColor,
  textColor,
  onPress,
  width = 65,
}: ButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.red,
      height: 65,
      width: width,
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

  return (
    <TouchableOpacity
      onPress={() => {
        onPress()
      }}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button
