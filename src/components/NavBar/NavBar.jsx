import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.NavBar}>
                {this.props.user ?
                    <div className={styles.logout}>
                    <Link to='/'>HOME</Link>
                    <Link to='/inventory'>INVENTORY</Link>
                    <Link>LOGOUT</Link>
                        <div>
                            <h4>Welcome, {this.props.user.username}!</h4>
                        </div>
                    </div>
                        :
                    <div>
                        <Link to='/'>HOME</Link>
                        <Link to='/login'>LOGIN</Link>
                        <hr/>
                    </div>
                     }
            </div>
        );
    }
}

export default NavBar;