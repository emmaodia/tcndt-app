import React from 'react';
import Profile from './Profile.js'
import style from './profile.module.css'

const Profiles = ({firstName, lastName, specialty, experience, cv, workAt, email}) => {
    return(
        <div className={style.profile}>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{specialty}</p>
            <p>{experience}</p>
            <p>{cv}</p>
            <p>{workAt}</p>
            <p>{email}</p>
        </div>
    )
}

export default Profiles;