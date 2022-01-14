//import { I18n } from 'aws-amplify';
import { AmplifyProvider, Authenticator, Heading } from '@aws-amplify/ui-react';

//import { translations } from '@aws-amplify/ui';
//import { dictionaire } from './utils/Translations'

import Main from './pages/Main'
import './App.css';
import '@aws-amplify/ui-react/styles.css';

//I18n.putVocabularies(translations);
//I18n.setLanguage('pt-BR');
//I18n.putVocabularies(dictionaire)


function App() {

  return (
    <div style={styles.container}>
      <AmplifyProvider>
        <div style={styles.headingContainer}>
          <Heading level={2} style={styles.headingText}>
            EAE
          </Heading>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <Authenticator
            signUpAttributes={['given_name', 'name', 'phone_number']}
            loginMechanisms={['email']}
          >
            {({ signOut, user }) => (
              <Main user={user} signOut={signOut} />
            )}
          </Authenticator>
        </div>
      </AmplifyProvider>
    </div>

  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirction: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#8055a4',
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontFamily: 'Azonix',
    color: '#fff',
  }
}

export default App;

