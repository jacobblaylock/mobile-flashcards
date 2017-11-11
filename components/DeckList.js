import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'

class DeckList extends Component {

  render() {
    const { flashcards } = this.props
    console.log(flashcards)

    return (
      <View style={styles.container}>
        {Object.keys(flashcards).map((key) => {
          return (
            <Deck
              style={styles.deck}
              key={key}
              title={key}
              count={flashcards[key].questions ? flashcards[key].questions.length : 0}
            />
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  deck: {
    marginLeft: 20
  }
})

function mapStateToProps(flashcards) {
  return {
    flashcards
  }
}

export default connect(mapStateToProps)(DeckList)