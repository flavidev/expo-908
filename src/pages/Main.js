import React from 'react'
import { Card } from '@aws-amplify/ui-react'
import { Logo } from '../components/Logo'


function Main(props) {
    return (
        <div style={styles.container}>
            <h1 className='welcome-text'>{props.user.attributes.given_name}</h1>
            <Logo />
            <Card
                variation='outlined'
                onClick={props.signOut}>Sair</Card>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

}

export default Main
