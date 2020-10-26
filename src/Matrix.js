import React, { Component } from 'react';
import Cell from './Cell.js'

/* 
Make a default values prop for Matrix, 
  which is a 10x10 array filled with the values '#F00' (red). 
    For inspiration, take a look at src/data.js.

Once you have made your Cell component, 
  replace the return value in genRow's map to: 
    <Cell value={val} />. 
      Here we are specifying our Cell component should have a value prop.

*/
export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value ={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    // console.log(this.props.values)
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    let newRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return new Array(10).fill(newRow)
  }) ()
}