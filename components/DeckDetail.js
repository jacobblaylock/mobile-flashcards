import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import { createQuiz } from '../actions'
import { gray, white, blue } from '../utils/colors'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deckKey}`
    })

  state = {
    marginTop: new Animated.Value(500)
  }

  componentDidMount () {
    const { marginTop } = this.state

    Animated.spring(marginTop, { toValue: 1, speed: 2 })
      .start()
  }

  toAddQuestion = () => {
    this.props.navigation.navigate(
      'NewQuestion',
      { deckKey: this.props.deckKey }
    )
  }

  toStartQuiz = () => {
    this.props.createQuiz(this.props.deck.questions)

    this.props.navigation.navigate(
      'Quiz',
      { deckKey: this.props.deckKey }
    )
  }  

  render () {
    const { deck } = this.props
    const { marginTop } = this.state

    return (
      <Animated.View style={[styles.container, { marginTop }]}>
        <View style={styles.deck}>
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
      </Animated.View>
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

function mapDispatchToProps (dispatch) {
  return {
    createQuiz: (questions) => dispatch(createQuiz(questions))      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',    
    alignItems: 'center',
    borderRadius: 2,
    padding: 20,
    margin: 10    
  },
  deck: {
    alignItems: 'center'
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