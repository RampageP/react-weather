import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
  return data.reduce((sum, num) =>sum += num ,1) / data.length;

}

export default (props)=> {
  return (
    <div>
      <Sparklines height = {120} width = {180} data = {props.data}>
        <SparklinesLine color = {props.color} />
        <SparklinesReferenceLine type = 'avg' />
      </Sparklines>
      <div>{Math.round(average(props.data)) + " " + props.units}</div>
    </div>
  );
}
