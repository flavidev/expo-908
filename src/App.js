import { I18n } from 'aws-amplify';
import { AmplifyProvider, Authenticator, Heading } from '@aws-amplify/ui-react';

import { translations } from '@aws-amplify/ui';
import { dictionaire } from './utils/Translations'

import Main from './pages/Main'

import '@aws-amplify/ui-react/styles.css';

I18n.putVocabularies(translations);
I18n.setLanguage('pt-BR');
I18n.putVocabularies(dictionaire)


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

/*

.welcome-text {
  font-family: 'Azonix';
  color: #fff;
  font-size: 1.5rem;
}

.amplify-button[data-variation='link'] {
  color: #8055a4;
}

.amplify-button[data-variation='primary'] {
  background-color: #8055a4;
  border-color: 'grey';
  color: #fff;
}

.amplify-tabs-item[data-state='active'] {
  color: #8055a4;
  background-color: 'grey';
  transition-property: none;
  border-color: #000;
}

*/