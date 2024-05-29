import React, { useContext } from 'react';
import './Profile.css'
import { AuthContext } from '../../../../providers/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className="profile">
            <div className="profile-card">
                <img src='/public/photos/profile.jpg' className="profile-card__image" />
                <h2 className="profile-card__name">{user?.displayName}</h2>
                <p className="profile-card__email">{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;