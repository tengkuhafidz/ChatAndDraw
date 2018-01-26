import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chatroom from './Chatroom';
import Whiteboard from './Whiteboard';

const blockStyle = {
  backgroundColor: 'white',
  border: '1px solid #eee',
  minHeight: '100vh',
  position:'relative'
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Row>
          <Col xs={12} sm={6} style={blockStyle}>
            <Chatroom />
          </Col>
          <Col xs={12} sm={6} style={blockStyle}>
            <Whiteboard />
          </Col>
        </Row>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
