import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){

  return (
    <div>
    <style  jsx>{`
      div {
        color: black;
        border: 5px solid green;
        display: inline-block;
        margin-right: -2px;
        margin-left: -2px;
        text-align: center;
        padding-right: 5px;
        padding-left: 5px;
        width: 200px;
        height: 250px;
        margin-top: 100px;
        background-color: white;
        opacity: 0.7;
        font-family: monospace;

      }
  `}</style>
    <p>{props.day}</p>
    <p>{props.location}</p>
    <p>{props.hours}</p>
    <p>Booth: {props.booth}</p>
    </div>

  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string

};

export default Schedule;
