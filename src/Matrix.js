import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => 
        <Cell value={val}/>
      ) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
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
  values : [
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00'],
    ['#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00', '#F00', '#f00']
  ]
}