import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';


const Header = (currentUser) => (
    <div className='header'>
        <Link className='logo-container' to="/react-ecommerce-website">
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className="option" to="/react-ecommerce-website/shop">SHOP</Link>
            <Link className="option" to="/react-ecommerce-website/shop">CONTACT</Link>
            {
                currentUser.currentUser?
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className="option" to="/react-ecommerce-website/signin">SIGN IN</Link>)
            }
        </div>
    </div>
)

export default Header;