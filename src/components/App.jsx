import React from 'react';
import ScheduleDetail from './ScheduleDetail';
import Header from './Header';
import ProductsList from './ProductsList';

function App(){
  var styles = {
    textAlign: 'center',

  };
  return (
    <div style={styles}>
      <style global jsx>{`
          body {
            background-image: url('http://1ut4jnm5m10oxrax2wal0104-wpengine.netdna-ssl.com/wp-content/uploads/2014/11/115892693.jpg');
            background-repeat: no-repeat;
            background-size: cover;

          }

      `}</style>
      <Header/>
      <hr/>
      <ScheduleDetail/><br/>
      <ProductsList/>
    </div>

  );
}

//App.propTypes = {
//};

export default App;
