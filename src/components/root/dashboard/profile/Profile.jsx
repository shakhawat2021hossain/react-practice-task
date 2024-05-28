import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-card">
                <img src='/public/photos/home.png' className="profile-card__image" />
                <h2 className="profile-card__name">Shakhawat</h2>
                <p className="profile-card__email">hello@world.com</p>
            </div>
        </div>
    );
};

export default Profile;