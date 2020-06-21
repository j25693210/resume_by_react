import React from 'react';
import { css } from 'emotion';
import profilePicture from './profile.JPG'

const ProfileImage = css({
    height: '170px',
    borderRadius: '4px'
});

const Avatar = ({ className }) => <img 
    className={`${ProfileImage} ${className}`}
    alt="Avatar is broken"
    src={profilePicture}
/>

export default Avatar;