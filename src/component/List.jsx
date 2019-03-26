import React from 'react'
import FetchData from '../hoc/FetchData'
class List extends React.Component {
  state = {
    searchValue: ''
  }
  listenScrollEvent(event) {
    var node = event.target
    const bottom = node.scrollHeight - node.scrollTop === node.clientHeight
    if (bottom) {
      this.props.fetchData()
    }
  }
  onChange = event => {
    this.setState({ searchValue: event.target.value })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.props.fetchData(false, {
        resetPage: true,
        search: this.state.searchValue
      })
    }
  }
  maxPopulation = () => {
    let min
    for (let i = 0; i < this.props.data.length; i++) {
      let row = this.props.data[i]
      let { population } = row
      if (population === 'unknown') {
        continue
      }
      population = Number(population)
      if (min === undefined) {
        min = population
      } else {
        if (min > population) {
          min = population
        }
      }
    }
    return min
  }
  populateListRow = (props, searchValue) => {
    let perMaxPixelValue
    if (searchValue) {
      perMaxPixelValue = this.maxPopulation()
    }
    return props.data.map(row => {
      let style = {}
      if (searchValue) {
        style = this.getPopulationStyle(searchValue, row, perMaxPixelValue)
      }
      return (
        <div
          title={row.population}
          onClick={_ => {
            let id = row.url.split('/')[5]
            props.history.push('star-wars/' + id)
          }}
          key={row.url}
        >
          <span style={style}>{row.name}</span>
          <span style={style}>{row.population}</span>
        </div>
      )
    })
  }
  getPopulationStyle(searchValue, { population } = {}, perMaxPixelValue) {
    if (!searchValue) {
      return {}
    }
    if (population === 'unknown' || !perMaxPixelValue) {
      return { fontSize: 0 }
    }
    return { fontSize: parseInt(Number(population) / perMaxPixelValue) }
  }
  render() {
    return (
      <div
        style={{
          marginLeft: '10%'
        }}
      >
        <input value={this.state.searchValue} onChange={this.onChange} />
        {!this.state.searchValue && (
          <div
            key="without-filtered"
            className="flex-container"
            onScroll={this.listenScrollEvent.bind(this)}
          >
            {this.populateListRow(this.props)}
          </div>
        )}
        {this.state.searchValue && (
          <div
            key="filtered"
            className="flex-container-no-style"
            onScroll={this.listenScrollEvent.bind(this)}
          >
            {this.populateListRow(this.props, this.state.searchValue)}
          </div>
        )}
      </div>
    )
  }
}
export default FetchData(List)
