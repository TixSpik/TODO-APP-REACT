import React from 'react'
import '../header/header.scss'
import Logo from '../../assets/clip-message-sent-1.png'

export default function header() {
    return (
        <div className='header'>
            <img src={Logo} alt='logo' />
            <h1>Todo List</h1>
        </div>
    )
}
