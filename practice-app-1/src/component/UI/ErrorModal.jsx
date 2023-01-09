import React from 'react'
import Button from './Button'
import './ErrorModal.css'

function ErrorModal(props) {
    return (
        <div className='error-modal'>
            <header>
                <h2>{props.title}</h2>
            </header>

            <p>{props.message}</p>

            <footer>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>

        </div>
    )
}

export default ErrorModal