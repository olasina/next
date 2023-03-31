import React from 'react';
import Link from 'next/link';
import Styles from '../styles/Header.module.css';

function Header() {
    return (
        <header className={Styles.header}>
            <div className={Styles.btnContainer}>
                <Link href='/'>
                    
                    <button className={Styles.btn}>
                        DEV.IO
                    </button>
                    
                </Link>
            </div>
            <Link href='/'> 
            Home
            </Link>
            <Link href='/about'>
            About
            </Link>
        </header>
    )
}

export default Header
