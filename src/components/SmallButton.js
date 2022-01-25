import React from 'react';


export default function SmallButton(props) {

    const handleOnClick = () => {
        props.disabled ? alert('Esta funcão estará disponível em breve 💜') : props.onClick();
    }

    return (
        <div onClick={handleOnClick} style={styles.container}>
            <h3 style={styles.buttonText}>{props.text}</h3>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        width: '12%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '5px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 0px 5px #000'
    },
    buttonText: {
        fontFamily: 'Azonix',
    }

}