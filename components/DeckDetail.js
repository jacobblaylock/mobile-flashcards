import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, white } from '../utils/colors'

class DeckDetail extends Component {
  render () {
    const { deck } = this.props
    console.log(deck)

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.count}>{deck.questions ? deck.questions.length : 0} Cards</Text>
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

function mapStateToProps (flashcards, { navigation }) {
  const { deckKey } = navigation.state.params
 
  return {
    deck: flashcards[deckKey]
  }
}

export default connect(mapStateToProps)(DeckDetail)