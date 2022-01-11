import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Authenticator loginMechanisms={['email']}>
        {({ signOut, user }) => (
          <div>
            <h1>Expo Village Residence 3A Apt 908</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}



export default App;
