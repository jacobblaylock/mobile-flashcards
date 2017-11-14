import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, blue } from '../utils/colors'

class Quiz extends Component {
  render () {


    return (
      <View style={styles.container}>
          <Text style={styles.title}>Questions {JSON.stringify(this.props.questions)}</Text>
      </View>
    )
  }
}

function mapStateToProps ({ flashcards }, { navigation }) {
  const { questions } = navigation.state.params
 
  return {
    questions
  }
}


export default connect(mapStateToProps)(Quiz)


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