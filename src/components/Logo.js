import logo from '../assets/images/eae-logo.png';
import './Bounce.css'

export const Logo = () => (
    <img src={logo} alt="logo" style={styles.logo} className='bounce' />
);

const styles = {
    logo: {
        maxWidth: '250px',
        maxHeight: '250px',
    }
}