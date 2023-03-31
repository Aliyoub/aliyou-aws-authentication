import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading, Text, TextField, View, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const formFields = {
  signUp: {
    email: {
      order:1
    },
    family_name: {
      order: 2
    },
    preferred_username: {
      order: 4
    },
    birthdate: {
      order: 3
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
  },
 }


// const signUpAttributes={['birthdate', 'family_name', 'preferred_username']}
// const signUpAttributes={['birthdate', 'family_name', 'preferred_username']}


function App() {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
    </Authenticator>
  );
}

export default App;
