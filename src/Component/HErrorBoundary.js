import React, { Component } from 'react'

class HErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }


    static getDerivedStateFromError(error) {            // method name is case sensitive very important
        return {
            hasError: true
        }

    }

    componentDidCatch(error,info){
        console.log(info)
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            return <h1>someerror</h1>
        }

        return this.props.children



    }
}

export default HErrorBoundary