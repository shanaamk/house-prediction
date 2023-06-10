// import React from 'react';

// function App() {
//   const handleClick = () => {
//     window.alert('Hello, World!');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function PopupMessage() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const popup = window.open('', 'Popup', 'width=300,height=200');
    popup.document.body.innerHTML = `
      <div style={{height:'200px'}}>
        <h2>Pop-up Message Box</h2>
        <input type="text" id="messageInput" placeholder="Type your message" />
        <button onclick="submitMessage()">Submit</button>
      </div>
    `;
    popup.submitMessage = () => {
      const input = popup.document.getElementById('messageInput');
      const submittedMessage = input.value;
      setMessage(submittedMessage);
      popup.close();
    };
  };

  return (
    <div>
      <button onClick={handleClick}>Open Pop-up</button>
      {message && <p>You submitted: {message}</p>}
    </div>
  );
}

export default PopupMessage;
