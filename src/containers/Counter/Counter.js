import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.additionBy5}  />
                <CounterControl label="Subtract" clicked={this.props.subtractionBy5}  />
                <hr/>
                <button onClick={()=>this.props.onStoreCounter(this.props.ctr)}>Store Counter</button>
                <ul>
                    {this.props.results.map( (result) => {
                        return <li key={result.id} onClick={() => this.props.onRemoveCounter(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        results: state.resultsReducer.results,
    };
};          

const mapDispatchToProps = dispatch => {
    return { 
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        additionBy5: () => dispatch({type: actionTypes.ADD, payload: {value: 10}}),
        subtractionBy5: () => dispatch({type: actionTypes.SUBTRACT, payload: {value: 10}}),
        onStoreCounter: (currentCounterValue)=>dispatch({type:actionTypes.STORE_COUNTER, payload: {currentCounterValue}}),
        onRemoveCounter: (id)=>dispatch({type:actionTypes.REMOVE_COUNTER, payload: {idToRemove: id}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
