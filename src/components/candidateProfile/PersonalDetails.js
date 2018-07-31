import React, { Component } from 'react';
import { globalVariable } from '../comon/config'; 
import { Row, Col } from 'react-bootstrap';

export const PersonalDetails = ({candidate}) => (
    <div className="section personal-details">
        <p className="section-title">Personal Details</p>
        <div>
            <Row className="details">
                <Col xs={12} md={6} className="detail-info"><span className="icon icon-phone"/>{candidate.phone ? candidate.phone : globalVariable.infoUnavailable}</Col>
                <Col xs={12} md={6} className="detail-info"><span className="icon icon-email"/>{candidate.email ? candidate.email : globalVariable.infoUnavailable}</Col> 
            </Row>
            <Row className="details">
                <Col xs={12} md={6} className="detail-info"><span className="icon icon-location"/>{candidate.basedLocation ? candidate.basedLocation : globalVariable.infoUnavailable}</Col>
                <Col xs={12} md={6} className="detail-info"><span className="icon icon-education"/>{candidate.educationLevel ? candidate.educationLevel : globalVariable.infoUnavailable}</Col> 
            </Row>
        </div>
    </div>
);

export default PersonalDetails