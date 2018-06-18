import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.additionBy5}  />
                <CounterControl label="Subtract" clicked={this.props.subtractionBy5}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};          

const mapDispatchToProps = dispatch => {
    return { 
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        additionBy5: () => dispatch({type: 'ADD', payload: {value: 10}}),
        subtractionBy5: () => dispatch({type: 'SUBTRACT', payload: {value: 10}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);