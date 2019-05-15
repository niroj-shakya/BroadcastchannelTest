import React from 'react';
import ReactDOM from 'react-dom';
import BroadcastChannel from 'broadcast-channel';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var channelName =  'BroadcastChannelTest';
var channel = new BroadcastChannel(channelName);

var messageInput = document.getElementById('textbox1');
var submitButton = document.getElementById('button1'); 

submitButton.onclick = function(){
    if(submitButton.disabled) return;
    else {
        console.log('postMessage ' + messageInput.value);
        channel.postMessage(messageInput.value);  
        messageInput.disabled = true;
        submitButton.disabled = true;         
    }
    ShowAlertWithDelay();
}

channel.onmessage = function(message) {
    console.dir('recieved message: ' + message);    
        messageInput.value = message;
        messageInput.disabled = true;
        submitButton.disabled = true;
    
}

var ShowAlertWithDelay=()=>{
 
    setTimeout(function(){ 
        messageInput.value = 'complete';
        channel.postMessage(messageInput.value);          
    }, 5000);
  }