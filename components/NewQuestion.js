import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { NavigationActions } from 'react-navigation'
import { blue, white, gray } from '../utils/colors'

class NewQuestion extends Component {

  state = {
    newQuestion: '',
    newAnswer: ''
  }

  addQuestion = () => {
    this.props.createQuestion({
      question: this.state.newQuestion,
      answer: this.state.newAnswer
    },
      this.props.deckKey
    )

    this.setState({
      newQuestion: '',
      newAnswer: ''
    })

    this.props.navigation.goBack()

  }

  render() {
    const { deck } = this.props
    console.log(deck)

    return (
      <View style={styles.container}>
        <Text style={styles.question}>Enter your new Question and Answer.</Text>
         <View>
          <TextInput
            style={styles.input}
            onChangeText={(newQuestion) => this.setState({newQuestion})}
            value={this.state.newQuestion}
          />
          <TextInput
            style={styles.input}
            onChangeText={(newAnswer) => this.setState({newAnswer})}
            value={this.state.newAnswer}
          />          
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.addQuestion}
          >            
            <Text style={styles.submitBtnText}>Add Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: white,
    borderColor: gray, 
    borderWidth: 1
  },  
  question: {
    fontSize: 20,
    margin: 3
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,    
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  submitBtnText: {
    color: white
  } 
})

function mapStateToProps(flashcards) {
  const deckKey = 'React'
  return {
    deck: flashcards[deckKey],
    deckKey
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createQuestion: (question, deckKey) => dispatch(addQuestion(question, deckKey))      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)