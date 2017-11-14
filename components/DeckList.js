import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'

class DeckList extends Component {

  render() {
    const { flashcards } = this.props


    return (
      <View style={styles.container}>
        {Object.keys(flashcards).map((key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                { deckKey: key }
            )}
            >            
              <Deck
                style={styles.deck}
                title={key}
                count={flashcards[key].questions ? flashcards[key].questions.length : 0}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

function mapStateToProps({ flashcards }) {
  return {
    flashcards
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  deck: {
    marginLeft: 20
  }
})