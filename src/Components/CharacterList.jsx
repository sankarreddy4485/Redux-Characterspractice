import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CharacterList extends Component {
  render() {
    return (
        <h4>Characters</h4>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)