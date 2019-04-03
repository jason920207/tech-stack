import React, { Component } from 'react'
import { CardSection } from './common'
import { connect } from 'react-redux'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }
  renderDescription() {
    console.log(this.props)
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return (
        <CardSection>
          <Text>{this.props.library.item.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.library.item
    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {id}
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize:18,
    paddingLeft: 15,

  }
}

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId
  }
}
export default connect(mapStateToProps,actions)(ListItem)
