import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'

class DeckList extends Component {

  render() {
    const { flashcards } = this.props
    console.log(flashcards)

    return (
      <View>
        {Object.keys(flashcards).map((key) => {
          return (
            <Deck
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

function mapStateToProps(flashcards) {
  return {
    flashcards
  }
}

export default connect(mapStateToProps)(DeckList)