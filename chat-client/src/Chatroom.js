import React, { Component } from 'react';
import ChatContentArea from './ChatContentArea';
import ChatTypeField from './ChatTypeField';

const typingAreaStyle = { 
  height: '190px',
  position: 'absolute', 
  bottom:'0',
  width: '100%',
  border: '1px solid #eee',
}

export default class Chatroom extends Component {
  render() {
    return (
      <div>
        <ChatContentArea/>
        <div style={typingAreaStyle}>
          <ChatTypeField />
        </div>
      </div>
    );
  }
}
