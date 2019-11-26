import React, { Component } from 'react';
import ErrorBoundaries from './ErrorBoundaries';
import Login from './Login';

export default class App extends Component {
    render() {
        return (
            <ErrorBoundaries>
                <Login />
            </ErrorBoundaries>
        )
    }
}