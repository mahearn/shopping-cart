import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingSpinner = () => {
    return (
        <>
            <FontAwesomeIcon 
                icon={faSpinner} 
                className="fa-spin" 
                style={{'fontSize':'28px'}} 
            />
        </>
    )
}

export default LoadingSpinner
