import { View } from 'react-native'
import React from 'react'

const ButtonGroupContainer = ({ children }) => {
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {children}
    </View>
  )
}

export default ButtonGroupContainer