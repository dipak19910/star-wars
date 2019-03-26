import React from 'react'
import '../App.css'
import { get } from '../api'

const FetchData = WrappedComponent => {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
        page: 1,
        loading: false
      }
    }

    fetch = (loading, params = {}) => {
      if (loading) {
        this.setState({ loading: true })
      }
      let { resetPage, ...restParams } = params
      if (resetPage) {
        this.state.page = 1
        this.state.data = []
      }

      get('planets', {
        page: this.state.page,
        ...restParams
      }).then(({ data }) => {
        this.setState({
          data: [...this.state.data, ...data.results],
          page: this.state.page + 1,
          loading: false
        })
      })
    }
    componentDidMount() {
      this.fetch(true)
    }

    render() {
      if (this.state.loading) {
        return (
          <div
            style={{
              marginLeft: '10%'
            }}
          >
            loading...
          </div>
        )
      }
      return (
        <WrappedComponent
          data={this.state.data}
          {...this.props}
          fetchData={this.fetch}
        />
      )
    }
  }
}

export default FetchData
