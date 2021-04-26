import React from 'react';
import {useSelector} from 'react-redux'

import './style.css'

export const Profile = () => {
    const {profile} = useSelector((state) => state.profile);

    const profileName = !!profile && !!profile.name && profile.name.length > 0 ? profile.name : 'name not specified';
    const profileLastname = !!profile && !!profile.lastName && profile.lastName.length > 0 ? profile.lastName : 'lastname not specified';

    return (
        <div className="profile">
            {!!profile ? (
                <div>
                    <h3>{profileName} {profileLastname}</h3>
                </div>
            ) : <h1>nope data</h1>}
        </div>
    )
}