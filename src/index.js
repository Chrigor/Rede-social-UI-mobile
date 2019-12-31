import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes'

class Index extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="#191A1D" barStyle="light-content" />
                <Routes />
            </>
        )
    }
}

export default Index;