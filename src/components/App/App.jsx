import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
