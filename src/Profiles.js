import React from 'react';
//import Profile from './Profile.js'
import style from './profile.module.css'

const Profiles = ({firstName, lastName, specialty, experience, cv, workAt, email}) => {
    return(
        <div className={style.profile}>
            <div className={style.prof}>
            <h2>{firstName} {lastName}</h2>
            <p>Specialty: {specialty}</p>
            <p>experience: {experience} years</p>
            {/* <p>{cv}</p>
            <p>{workAt}</p>
            <p>{email}</p> */}
            </div>
        </div>
    )
}

export default Profiles;