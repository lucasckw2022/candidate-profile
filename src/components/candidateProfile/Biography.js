import React, { Component } from 'react';
import placeholderImage from '../../images/profile-placeholder.png'

export const CandidateIntroduction = ({candidate}) => (
    <div className="section introduction">
        <h1 className="h1">{candidate.firstName} {candidate.lastName}</h1>
        <div className="image-container">
            <img className="profile-icon" src={candidate.profilePicture ? candidate.profilePicture : placeholderImage} />
        </div>
        <p>{candidate.biography}</p>
    </div>
);

export default CandidateIntroduction