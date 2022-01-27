import React, { useState } from 'react';
import { Button } from '@aws-amplify/ui-react';

import Plans from './Plans';
import About from './About';
import Contact from './Contact';

const Account = (props) => {

    const [isPlans, setIsPlans] = useState(false)
    const [isAbout, setIsAbout] = useState(false)
    const [IsContact, setIsContact] = useState(false)

    const handleSetIsPlan = () => {
        setIsPlans(true)
        setIsContact(false)
        setIsAbout(false)
    }

    const handleSetIsContact = () => {
        setIsPlans(false)
        setIsContact(true)
        setIsAbout(false)
    }

    const handleSetIsAbout = () => {
        setIsPlans(false)
        setIsContact(false)
        setIsAbout(true)
    }

    const handleGoBack = () => {
        setIsPlans(false)
        setIsContact(false)
        setIsAbout(false)
    }

    return (
        <div style={styles.container}>
            {!isPlans && !IsContact && !isAbout &&
                <>
                    <Button style={styles.button} onClick={handleSetIsPlan} >Planos</Button>
                    <Button style={styles.button} onClick={handleSetIsAbout} >Sobre</Button>
                    <Button style={styles.button} onClick={handleSetIsContact} >Contato</Button>
                    <Button style={styles.button} onClick={props.signOut}>Sair</Button>
                </>
            }

            {IsContact &&
                <>
                    <div style={styles.areaContainer}>
                        <Contact user={props.user} />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }
            {isPlans &&
                <>
                    <div style={styles.areaContainer}>
                        <Plans />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }
            {isAbout &&
                <>
                    <div style={styles.areaContainer}>
                        <About />
                    </div>
                    <Button style={styles.button} onClick={handleGoBack}>Voltar</Button>
                </>
            }

        </div>
    )
};

const styles = {
    container: {
        display: 'flex',
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    areaContainer: {
        height: "100%",
    },
    button: {
        color: "#000",
        backgroundColor: "#fff",
        width: "30vw",
        height: "7.5vh",
        borderRadius: "5px",
        border: "1px solid #000",
        margin: "5px",
    }
}
export default Account