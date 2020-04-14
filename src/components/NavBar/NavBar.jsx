import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return (
            <div className={styles.NavBar}>
                {this.props.user ?
                    <div className={styles.linkWrapper}>
                        <div className={styles.logout}>
                            <Link to='/' className={styles.NavBarLink}>HOME</Link> |
                            <Link to='/inventory' className={styles.NavBarLink}>INVENTORY</Link> |
                            <Link to='' className={styles.NavBarLink}>LOGOUT</Link>
                        </div>
                        <div className={styles.Welcome}>
                            Welcome, {this.props.user.first_name}!
                        </div>
                    </div>
                        :
                    <div>
                        <Link to='/' className={styles.NavBarLink}>HOME</Link> |
                        <Link to='/login' className={styles.NavBarLink}>LOGIN</Link>
                        <hr/>
                    </div>
                     }
            </div>
        );
    }
}

export default NavBar;