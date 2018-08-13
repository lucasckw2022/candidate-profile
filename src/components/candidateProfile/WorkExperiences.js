import React, { Component } from 'react';
import moment from 'moment';
import { Grid, Row, Col } from 'react-bootstrap';
import { globalVariable } from '../comon/config'; 

export const WorkExperiences = ({experiences}) => (
    <div className="section work-experience">
        <p className="section-title">Experiences</p>
        <ul className="featured-list">
        {   
            experiences.map((item, id)=>{
                let fromDate = moment(item.fromDate).format('MMM-YYYY'),
                    toDate = item.toDate ? moment(item.toDate).format('MMM-YYYY') : 'Current',
                    toDateValue = moment(item.toDate ? item.toDate : new Date()),
                    diffYear = Math.floor(toDateValue.diff(item.fromDate, 'M') / 12),
                    diffMonths = Math.floor(toDateValue.diff(item.fromDate, 'M') % 12),
                    diff = `${diffYear} ${diffYear > 1 ? 'yrs' : 'yr' } ${diffMonths} ${diffMonths > 1 ? 'mos' : 'mo'}`
                return (<li key={`experience-${id}`}>
                    <p className="list-title">{item.position}</p>
                    <p>{item.place}</p>
                    <p>{`${fromDate} - ${toDate} (${diff})`}</p>
                    {item.description && <p className="remarks">{item.description.split('\n').map((item, id)=> <p>{item}</p>)}</p>}
                </li>)
            })
        }
        </ul>
    </div>
);

export default WorkExperiences