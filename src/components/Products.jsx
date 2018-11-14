import React from 'react';
import PropTypes from 'prop-types';

function Products(props){

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
          width: 150px;
          height: 250px;
          margin-top: 100px;
          background-color: white;
          opacity: 0.7;
          overflow: scroll;
          font-family: monospace;

        }
        `}</style>
      <p>{props.month}</p>
      <ul>{props.selection.map((produceItem, index) =>
          <li key={index}>
            {produceItem}
          </li>
        )}
      </ul>
    </div>

  );
}

Products.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Products;
