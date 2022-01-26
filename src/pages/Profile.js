import React from 'react';
import Button from '../components/Button';

const Profile = (props) => {
    return (
        <div style={styles.container}>
            <Button text="Perfil" disabled={true} />
            <Button text="Planos" disabled={true} />
            <Button onClick={props.signOut} text="Sair" />
        </div>
    )
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    }
}

export default Profile;
