import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, white } from '../utils/colors'

class Deck extends Component {
  render () {
    const { title, count } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count} Cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',    
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    padding: 20,
    margin: 10
  },
  title: {
    fontSize: 30
  },
  count: {
    color: gray,
    fontSize: 20
  }
})

export default Deck