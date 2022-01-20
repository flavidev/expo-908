import { AmplifyProvider, Authenticator, } from '@aws-amplify/ui-react';
import { AuthComponents } from './utils/AuthComponents';

import '@aws-amplify/ui-react/styles.css';
import './App.css'

import Main from './pages/Main'

function App() {

  return (
    <div className='app-container'>
      <AmplifyProvider >
        <Authenticator
          components={AuthComponents}
          signUpAttributes={['name', 'family_name', 'phone_number']}
          loginMechanisms={['username']}
        >
          {({ signOut, user }) => (
            <Main user={user} signOut={signOut} />
          )}
        </Authenticator>
      </AmplifyProvider>
    </div>
  );
}

export default App;