import React from 'react';


function Header(){


  return (
    <div>
      <style jsx>{`
          h1 {
        font-family: monospace;
        margin-top: 50px;
        font-size: 75px;
        opacity: 0.7;
        color: red;
        background-color: white;
        padding: 10px;
      }
      img {
        width: 200px;
        height: 100px;
        padding-top: 10px;
      }
      `}</style>
    <h1>Avery's Organics <img src="http://anacortesfarmersmarket.org/wp-content/uploads/AFM-Tractor-General_no-market-name.jpg"></img></h1>

    </div>

  );
}

export default Header;
