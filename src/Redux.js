import React, { Component } from 'react'

export default class Redux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            year:''
        }
    }

    handleChange = (e) => {
        this.setState({
            age:e.target.value
        })
    }
    ageCalculator = () => {
        this.setState({
            year : 1994 - this.state.age
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.age} onChange={this.handleChange} />
                <button onClick={this.ageCalculator}>Calculate</button>
                <h1>{this.state.year}</h1>
            </div>
        )
    }
}
