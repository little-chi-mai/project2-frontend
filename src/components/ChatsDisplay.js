import React, {Component} from 'react';

const ChatsDisplay = (props) => {
  return(
    <div>
      {props.chats.map((c) => {
        return(
          <p key={c.id}>{c.user.name} said: {c.content}</p>
        )
      })}
    </div>
  )
}

export default ChatsDisplay
