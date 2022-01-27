import React from 'react';
import { Text, Image } from '@aws-amplify/ui-react';

import profilePicture from '../assets/images/profile.png';

function Header(props) {
    const { email, given_name, name } = props.user;
    return (
        <div style={styles.container}>

            <Image height="25%" width="25%" style={styles.profilePicture} src={profilePicture} />

            <div style={styles.userInfoContainer}>
                <Text className='small-text'> {given_name} {name} </Text>
                <Text className='small-text'> {email} </Text>
                <Text className='small-text'> Status financeiro: ATIVO </Text>
                <Text className='small-text'> Plano atual: Em Breve</Text>
                <Text className='small-text'> Créditos semanais: Em Breve </Text>
            </div>

        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    profilePicture: {
        borderRadius: '50%',
        border: '1px solid white',
        flex: 1,
        margin: '10px',
        maxHeight: '200px',
        maxWidth: '200px',
    },
    userInfoContainer: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '10px',
        alignItems: 'flex-end',
    }
}

export default Header;
