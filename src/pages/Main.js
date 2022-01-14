import React from 'react'
import { Card } from '@aws-amplify/ui-react'
import { Logo } from '../components/Logo'


function Main(props) {
    return (
        <div className='main-container'>
            <Logo />
            <Card
                variation='outlined'
                onClick={props.signOut}>Sair</Card>
        </div>
    )
}


export default Main
