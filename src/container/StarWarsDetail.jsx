import { connect } from 'react-redux'
import React from 'react'
import { get } from '../api'
class StarWarsDetail extends React.Component {
  state = {}
  componentDidMount() {
    get('planets/' + this.props.match.params.id).then(data => {
      this.setState({ data: data.data })
    })
  }
  render() {
    return (
      <div
        style={{
          padding: 15,
          marginLeft: 25
        }}
      >
        {!this.state.data && <div>Loading....</div>}
        <table>{makeViz(this.state.data)}</table>
      </div>
    )
  }
}

function makeViz(data) {
  if (!data) {
    return null
  }
  let renderedData = []
  for (let key in data) {
    if (typeof data[key] === 'string') {
      renderedData.push(
        <tr>
          <td>{key.toUpperCase()}</td>
          <td>{data[key]}</td>
        </tr>
      )
    }
  }
  return renderedData
}
const mapStateToProps = state => {
  return {
    // obj is an Immutable object in Smart Component, but it’s converted to a plain
    // JavaScript object by toJS, and so passed to DumbComponent as a pure JavaScript
    // object. Because it’s still an Immutable.JS object here in mapStateToProps, though,
    // there is no issue with errant re-renderings.
    data: state
  }
}
export default connect(mapStateToProps)(StarWarsDetail)
