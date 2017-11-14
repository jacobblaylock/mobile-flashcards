import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, blue } from '../utils/colors'

class DeckDetail extends Component {

  toAddQuestion = () => {
    this.props.navigation.navigate(
      'NewQuestion',
      { deckKey: this.props.deckKey }
    )
  }

  toStartQuiz = () => {
    this.props.navigation.navigate(
      'Quiz',
      { questions: this.props.deck.questions }
    )
  }  

  render () {
    const { deck } = this.props
    console.log(deck)

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.count}>{deck.questions ? deck.questions.length : 0} Cards</Text>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.toAddQuestion}
          >            
            <Text style={styles.submitBtnText}>Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.toStartQuiz}
          >            
            <Text style={styles.submitBtnText}>Start Quiz</Text>
          </TouchableOpacity>          
      </View>
    )
  }
}

function mapStateToProps ({ flashcards }, { navigation }) {
  const { deckKey } = navigation.state.params
 
  return {
    deck: flashcards[deckKey],
    deckKey
  }
}

export default connect(mapStateToProps)(DeckDetail)

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
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,    
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    height: 45,
    width: 180,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText: {
    color: white
  }   
})