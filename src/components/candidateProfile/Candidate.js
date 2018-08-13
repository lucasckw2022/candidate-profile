import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Biography from './Biography'
import PersonalDetails from './PersonalDetails'
import WorkExperiences from './WorkExperiences'
import Skills from './Skills'
import Languages from './Languages'
import logo from '../../images/icon_gumtree.svg'

export const Candidate = ({candidate}) => (
    <Panel className="candidate">
        <Panel.Body>
            <Biography candidate={candidate} />
        </Panel.Body>
        <Panel.Body>
            <PersonalDetails candidate={candidate} />
            { candidate.workExperiences && candidate.workExperiences.length > 1 && <WorkExperiences experiences={candidate.workExperiences}/>}
            { candidate.skills && candidate.skills.length > 1 && <Skills skills={candidate.skills} /> }
            { candidate.languages && candidate.languages.length > 1 && <Languages languages={candidate.languages} /> }
            <div className="image-container">
                <img className="brand-logo" src={logo} />
            </div>
        </Panel.Body>
    </Panel>
);

export default Candidate