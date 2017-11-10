import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {
  render () {
    const { title, count } = this.props

    return (
      <View>
        <Text>{title}</Text>
        <Text>{count}</Text>
      </View>
    )
  }
}

export default Deck