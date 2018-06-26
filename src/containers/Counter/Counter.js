import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        additionBy5: () => dispatch(actionCreators.add({value: 10})),
        subtractionBy5: () => dispatch(actionCreators.subtract({value: 10})),
        onStoreCounter: (currentCounterValue)=>dispatch(actionCreators.storeCounter({currentCounterValue})),
        onRemoveCounter: (id)=>dispatch(actionCreators.removeCounter({idToRemove: id}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
