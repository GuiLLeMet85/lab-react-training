import React, {useState} from "react";
import profiles from '../data/berlin.json';

export default function Facebook () {
    const [profilesInfo, setProfiles] = useState(profiles);


    // eslint-disable-next-line no-lone-blocks
    return (
        profiles.map(el => {
            return (

            <div className='card'>
            <div className="idcard">
                    <img src={el.img} alt={el.firstName} className="profile-pict" />
                <div className="card-info">
                    <p><strong> First name:</strong> {el.firstName}</p>
                    <p><strong> Last name:</strong> {el.lastName}</p>
                    <p><strong> Country:</strong> {el.country}</p>
                    <p><strong> Type:</strong> {el.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            </div>
            </div>
        )
    })
)
}