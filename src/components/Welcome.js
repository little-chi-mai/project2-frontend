import React from 'react'
import Logo from './logo.png';

var style = {

  display: 'flex',
  justifyContent: 'center',

};

function Welcome() {
  return(
    <div>
      <p style={{fontSize: '2.5em', textAlign: 'center', paddingTop: '40px'}}>Don't know where to go?</p>
      <h5>WELCOME tO</h5>
      <div style={style}>
        <a href="/"><img src={Logo} alt="" style={{height: '40vh'}} /></a>
      </div>
      <p style={{fontSize: '1em', textAlign: 'center', paddingTop: '10px', fontStyle: 'italic'}}>Click to go in</p>
    </div>

  )
}

export default Welcome
