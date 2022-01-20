import logo from '../assets/images/eae-logo.png';

export const Logo = (props) => (
    <>
        {props.size === 'large' && <img src={logo} alt="logo" style={styles.large} />}
        {props.size === 'medium' && <img src={logo} alt="logo" style={styles.medium} />}
        {props.size === 'small' && <img src={logo} alt="logo" style={styles.small} />}
    </>

);

const styles = {
    large: {
        flex: 1,
        maxWidth: '60vw',
        maxHeight: '60vh',
    },
    medium: {
        flex: 1,
        maxWidth: '30vw',
        maxHeight: '30vh',
    },
    small: {
        flex: 1,
        maxWidth: '15vw',
        maxHeight: '15vh',
    }
}
