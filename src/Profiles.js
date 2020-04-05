import React from 'react';
import profileCard from './profile-card.module.css'
//import {Image, Transformation} from 'cloudinary-react';

const Profiles = ({firstName, lastName, specialty, experience, cv, workAt, email}) => {
    return(
        // https://res.cloudinary.com/emmaodia/image/upload/v1571423773/emmaodia.jpg
        <div className={profileCard.card}>
            {/* <div className={profileCard.image}>
                <Image cloudName="emmaodia" publicId="emmaodia.jpg" secure="true">
                    <Transformation width="200" height="250" gravity="face" radius="5" crop="thumb" />
                </Image>
            </div>
         */}

            <div className={profileCard.prof}>
                <h2>{firstName} {lastName}</h2>
                <p>Specialty: {specialty}</p>
                <p>experience: {experience} years</p>
                <button>View More</button>
                {/* <p>{cv}</p>
                <p>{workAt}</p>
                <p>{email}</p> */}
            </div> 
        </div>
    )
}

export default Profiles;