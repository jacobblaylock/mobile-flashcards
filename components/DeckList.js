import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { fetchDecks } from '../actions'

class DeckList extends Component {

  componentWillMount () {
    this.props.fetchDecks()
  }

  render() {
    const { flashcards } = this.props

    if(Object.keys(flashcards).length < 1) {
      return (
        <View style={styles.container}>
          <Text>You have not yet created any decks.  Please add a deck.</Text>
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
    )
  }
}

function mapStateToProps({ flashcards }) {
  return {
    flashcards
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchDecks: () => dispatch(fetchDecks())      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  deck: {
    marginLeft: 20
  }
})