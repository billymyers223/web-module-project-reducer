import React, {useReducer} from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers/index'
import { addOne, applyNumber, changeOperation, clearDisplay, addMemory, imposeMemory, clearMemory} from '../src/actions/index';


function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);
  
  const numClick = (num) =>{
    dispatch(applyNumber(num))
  }
  const operatorClick = (op) =>{
    dispatch(changeOperation(op))
  }
  const clearClick = () =>{
    dispatch(clearDisplay())
  }
  const addMemoryClick = () =>{
    dispatch(addMemory())
  }
  const imposeMemClick = () =>{
    dispatch(imposeMemory())
  }
  const memoryClearClick = () =>{
    dispatch(clearMemory)
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {addMemoryClick}/>
              <CalcButton value={"MR"} onClick = {imposeMemClick}/>
              <CalcButton value={"MC"} onClick = {memoryClearClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick ={()=>numClick(1)}/>
              <CalcButton value={2} onClick ={()=>numClick(2)} />
              <CalcButton value={3} onClick ={()=>numClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick ={()=>numClick(4)}/>
              <CalcButton value={5} onClick ={()=>numClick(5)}/>
              <CalcButton value={6} onClick ={()=>numClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick ={()=>numClick(7)}/>
              <CalcButton value={8} onClick ={()=>numClick(8)}/>
              <CalcButton value={9} onClick ={()=>numClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>operatorClick("+")}/>
              <CalcButton value={"*"} onClick={()=>operatorClick("*")}/>
              <CalcButton value={"-"} onClick={()=>operatorClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>clearClick()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
