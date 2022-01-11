import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className='container' style={styles.container}>
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

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#225464',
  },
}

export default App;
