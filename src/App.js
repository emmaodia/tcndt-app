import React, {useEffect, useState} from 'react';
import Profiles from './Profiles.js'; 
import './App.css';

const App = () => {

  const exReq = `http://localhost:5000/api/v1/profile`

  const [profiles, setProfiles] = useState([]);

  useEffect(()=> {
    getProfiles();
  }, [])

  const getProfiles = async () => {
    const response = await fetch(exReq)
    const data = await response.json();

    setProfiles(data.response);

    console.log(data.response);
  }

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <form className="search-form">
        <input className="search-bar" type='text' />
  <button className="search-button" type='submit'>Search</button>
      </form>
      <div className="profiles">
        {profiles.map(profile => (
          <Profiles
            key={profile.firstName}
            firstName={profile.firstName}
            lastName={profile.lastName}
            specialty={profile.specialty}
            experience={profile.experience}
            cv={profile.cv}
            workAt={profile.workAt}
            email={profile.email}
          />
        ))}
      </div>
    </div>
  )
};

export default App;
