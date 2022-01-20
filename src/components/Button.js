import React from 'react';


export default function Button(props) {

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '0 12.5px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0px 0px 5px #000'
    },
    buttonText: {
        fontFamily: 'Azonix',
    }

}