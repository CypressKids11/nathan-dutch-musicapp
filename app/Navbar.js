'use client'
import styles from './styles.css'

export default function Navbar(){
    return (
        <div className='navbar'>
            <img src='./logo.png' alt='logo' className='nav-logo'/>
            <h1 className='nav-title'>Video Game Music App</h1>
            <a onClick={
                () => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    })
                }
            } className='nav-link'>More Info</a>
        </div>
    )
}